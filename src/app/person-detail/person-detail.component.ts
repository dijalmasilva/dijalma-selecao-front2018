import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from '../classes/person';
import { PhysicalPerson } from '../classes/physicalPerson';
import { LegalPerson } from '../classes/legalPerson';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  person: Person;

  public maskCpf;
  public maskText;
  public maskDate;
  public maskCep;
  public maskCnpj;
  public maskFone;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {
    // tslint:disable-next-line:max-line-length
    this.person = new PhysicalPerson('Manoel Dijalma', Date.now(), '100.300.054-18', '3763218', '58900-000' , 'Tenente', '195', 'Casas Populares', 'Cajazeiras', 'Paraíba', '83 9999', 'dijalmacz@gmail.com');

    this.maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.maskText = [/^[A-Za-z]+$/];
    this.maskDate = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-2]/, /[09]/, /[16789]/, /\d/];
    this.maskCep = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    this.maskCnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.maskFone = ['(', /\d/, /\d/, ')', ' ', '9', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  }

  ngOnInit() {
    this.getId();
  }

  getId(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  goBack(): void {
    this.location.back();
  }
}
