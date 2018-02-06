import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from '../classes/person';
import { PhysicalPerson } from '../classes/physicalPerson';
import { LegalPerson } from '../classes/legalPerson';
import { PersonService } from '../person.service';

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

  constructor(
    private router: Router,
    private personService: PersonService
  ) {
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
    this.personService.getPersons().subscribe(persons => this.personsFound = persons);
  }

  public edit(id: number): void {
    this.router.navigate([`/personDetail/${id}`]);
  }
}
