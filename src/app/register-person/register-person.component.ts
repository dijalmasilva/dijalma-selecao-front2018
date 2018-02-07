import { Component, OnInit } from '@angular/core';
import { StatesService } from '../states.service';
import { Observable } from 'rxjs/Observable';
import { State } from '../classes/state';

import { Person } from '../classes/person';
import { PhysicalPerson } from '../classes/physicalPerson';
import { LegalPerson } from '../classes/legalPerson';
import { PersonService } from '../person.service';
import { Location } from '@angular/common';

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
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  telefone: string;
  email: string;
  nome: string;
  dataDeNascimento: string;
  cpf: string;
  rg: string;
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  inscEstadual: string;

  physicalPerson: PhysicalPerson;
  legalPerson: LegalPerson;

  // masks
  public maskCpf;
  public maskText;
  public maskDate;
  public maskCep;
  public maskCnpj;
  public maskFone;

  constructor(
    private statesService: StatesService,
    private personService: PersonService,
    private location: Location
  ) {
    this.maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.maskText = [/^[A-Za-z]+$/];
    this.maskDate = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-2]/, /[09]/, /\d/, /\d/];
    this.maskCep = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    this.maskCnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.maskFone = ['(', /\d/, /\d/, ')', ' ', '9', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  }

  ngOnInit() {
    this.choicePhysicalPerson();
    this.getStates();
    this.initCities();
    this.initializeValues();
  }

  private initializeValues() {
    this.stateSelected = '';
    this.cep = '';
    this.logradouro = '';
    this.numero = '';
    this.bairro = '';
    this.cidade = '';
    this.telefone = '';
    this.email = '';
    this.nome = '';
    this.dataDeNascimento = '';
    this.cpf = '';
    this.rg = '';
    this.cnpj = '';
    this.razaoSocial = '';
    this.nomeFantasia = '';
    this.inscEstadual = '';
    this.physicalPerson = new PhysicalPerson();
    this.legalPerson = new LegalPerson();
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

  private updateValuesInPhysicalPerson() {
    this.physicalPerson.nome = this.nome;
    this.physicalPerson.rg = this.rg;
    this.physicalPerson.dataDeNascimento = this.dataDeNascimento;
    this.physicalPerson.cpf = this.cpf;
    this.physicalPerson.cep = this.cep;
    this.physicalPerson.bairro = this.bairro;
    this.physicalPerson.email = this.email;
    this.physicalPerson.estado = this.stateSelected;
    this.physicalPerson.logradouro = this.logradouro;
    this.physicalPerson.telefone = this.telefone;
    this.physicalPerson.numero = this.numero;
    this.physicalPerson.cidade = this.cidade;
  }

  private updateValuesInLegalPerson() {
    this.legalPerson.cnpj = this.cnpj;
    this.legalPerson.nomeFantasia = this.nomeFantasia;
    this.legalPerson.inscEstadual = this.inscEstadual;
    this.legalPerson.razaoSocial = this.razaoSocial;
    this.legalPerson.cep = this.cep;
    this.legalPerson.bairro = this.bairro;
    this.legalPerson.email = this.email;
    this.legalPerson.estado = this.stateSelected;
    this.legalPerson.logradouro = this.logradouro;
    this.legalPerson.telefone = this.telefone;
    this.legalPerson.numero = this.numero;
    this.legalPerson.cidade = this.cidade;
  }

  public changeState(): void {
    this.cities = this.statesService.getCitiesFromState(this.stateSelected);
  }

  public savePerson(): void {
    console.log('save person...');
    if (this.isPhysicalPerson) {
      this.updateValuesInPhysicalPerson();
      this.personService.addPerson(this.physicalPerson).subscribe(a => {
        if (a) {
          alert('Pessoa física cadastrada!');
          this.initializeValues();
        } else {
          alert('Erro ao cadastrar');
        }
      });
    } else {
      this.updateValuesInLegalPerson();
      this.personService.addPerson(this.legalPerson).subscribe(a => {
        if (a) {
          alert('Pessoa jurídica cadastrada!');
          this.initializeValues();
        } else {
          alert('Erro ao cadastrar');
        }
      });
    }
  }

  public goBack(): void {
    this.location.back();
  }
}
