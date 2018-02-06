import { Component, OnInit } from '@angular/core';
import { StatesService } from '../states.service';
import { Observable } from 'rxjs/Observable';
import { State } from '../classes/state';

import { Person } from '../classes/person';
import { PhysicalPerson } from '../classes/physicalPerson';
import { LegalPerson } from '../classes/legalPerson';

@Component({
  selector: 'app-register-person',
  templateUrl: './register-person.component.html',
  styleUrls: ['./register-person.component.css']
})
export class RegisterPersonComponent implements OnInit {

  isPhysicalPerson: boolean;
  isLegalPerson: boolean;
  states: Array<State>;
  cities: Array<String>;
  stateSelected: string;

  public person: Person;
  public physicalPerson: PhysicalPerson;
  public legalPerson: LegalPerson;

  // masks
  public maskCpf;
  public maskText;
  public maskDate;
  public maskCep;
  public maskCnpj;
  public maskFone;

  constructor(
    private statesService: StatesService
  ) {
    this.stateSelected = '';
    this.maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.maskText = [/^[A-Za-z]+$/];
    this.maskDate = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-2]/, /[09]/, /[16789]/, /\d/];
    this.maskCep = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    this.maskCnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.maskFone = ['(', /\d/, /\d/, ')', ' ', '9', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  }

  ngOnInit() {
    this.choicePhysicalPerson();
    this.getStates();
    this.initCities();
    this.initializaPersons();
  }

  initializaPersons(): void {
    this.person = new Person(null, '', '', '', '', '', '', '', '');
    this.physicalPerson = this.person as PhysicalPerson;
    this.physicalPerson.nome = '';
    this.physicalPerson.dataDeNascimento = '';
    this.physicalPerson.rg = '';
    this.physicalPerson.cpf = '';
    this.legalPerson = this.person as LegalPerson;
    this.legalPerson.cnpj = '';
    this.legalPerson.nomeFantasia = '';
    this.legalPerson.razaoSocial = '';
    this.legalPerson.inscEstadual = '';
  }

  changeTypeSelected(type: number) {
    if (type === 1) {
      this.choicePhysicalPerson();
    } else {
      this.choiceLegalPerson();
    }
  }

  private choicePhysicalPerson(): void {
    this.isPhysicalPerson = true;
    this.isLegalPerson = false;
  }

  private choiceLegalPerson(): void {
    this.isLegalPerson = true;
    this.isPhysicalPerson = false;
  }

  private getStates(): void {
    this.states = this.statesService.getStates();
  }

  private initCities(): void {
    this.cities = [];
  }

  public changeState(): void {
    this.cities = this.statesService.getCitiesFromState(this.stateSelected);
  }
}
