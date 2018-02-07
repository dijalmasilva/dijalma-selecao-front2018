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
      const pPerson = this.person as PhysicalPerson;
      if (pPerson.cpf === undefined) {
        this.legalPerson = this.person as LegalPerson;
      } else {
        this.physicalPerson = pPerson;
      }
    });
  }

  editPerson(): void {
    if (this.physicalPerson) {
      this.personService.updatePerson(this.physicalPerson).subscribe(
        data => {
          console.log(data);
          alert('Editado');
          this.location.back();
        },
        error => {
          console.error(error);
          alert('error');
        }
      );
    } else {
      this.personService.updatePerson(this.legalPerson).subscribe(a => {
        if (a) {
          alert('editado!');
          this.location.back();
        } else {
          alert('error ao editar');
        }
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
