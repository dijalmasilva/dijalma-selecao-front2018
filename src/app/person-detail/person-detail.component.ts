import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from '../classes/person';
import { PhysicalPerson } from '../classes/physicalPerson';
import { LegalPerson } from '../classes/legalPerson';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  person: Person;
  physicalPerson: PhysicalPerson;
  legalPerson: LegalPerson;

  public maskCpf;
  public maskText;
  public maskDate;
  public maskCep;
  public maskCnpj;
  public maskFone;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private personService: PersonService
  ) {
    this.maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.maskText = [/^[A-Za-z]+$/];
    this.maskDate = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-2]/, /[09]/, /[16789]/, /\d/];
    this.maskCep = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    this.maskCnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.maskFone = ['(', /\d/, /\d/, ')', ' ', '9', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  }

  ngOnInit() {
    this.getPerson();
  }

  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id).subscribe(person => {
      this.person = person;
      console.log(this.person);
      if (person.cpf !== undefined) {
        console.log('Entry in physical');
        this.physicalPerson = this.person as PhysicalPerson;
        console.log(this.physicalPerson);
      } else {
        console.log('Entry in legal');
        this.legalPerson = this.person as LegalPerson;
        console.log(this.legalPerson);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
