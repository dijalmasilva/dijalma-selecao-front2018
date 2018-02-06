import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from '../classes/person';
import { PhysicalPerson } from '../classes/physicalPerson';
import { LegalPerson } from '../classes/legalPerson';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  isCpfDoc: boolean;
  isCnpjDoc: boolean;
  personsFound: Person[];

  public maskCnpj;
  public maskCpf;

  constructor(private router: Router) {
    this.maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.maskCnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  }

  ngOnInit() {
    this.choiceCpfDoc();
    this.initPersons();
  }

  changeTypeSelected(type: number): void {
    if (type === 1) {
      this.choiceCpfDoc();
    } else {
      this.choiceCnpjDoc();
    }
  }

  private choiceCpfDoc(): void {
    this.isCpfDoc = true;
    this.isCnpjDoc = false;
  }

  private choiceCnpjDoc(): void {
    this.isCnpjDoc = true;
    this.isCpfDoc = false;
  }

  private initPersons(): void {
    this.personsFound = [
      new PhysicalPerson(
        'Manoel Dijalma',
        Date.now(),
        '100.300.054-18',
        '3763218',
        '58900-000',
        'Tenente Aquino',
        '195',
        'Casas Populares',
        'Cajazeiras',
        'Paraíba',
        '(83) 99900-5077',
        'dijalmacz@gmail.com'
      ),
      new LegalPerson(
        '99.999.999/9999-99',
        'I dont',
        'I dont',
        'Ideias',
        '58900-000',
        'Tenente Aquino',
        '195',
        'Casas Populares',
        'Cajazeiras',
        'Paraíba',
        '(83) 99900-5077',
        'dijalmacz@gmail.com'
      )
    ];
  }

  public edit(id: number): void {
    this.router.navigate([`/personDetail:${id}`]);
  }
}
