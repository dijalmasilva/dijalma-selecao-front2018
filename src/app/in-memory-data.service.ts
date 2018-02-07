import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';
import { Person } from './classes/person';
import { PhysicalPerson } from './classes/physicalPerson';
import { LegalPerson } from './classes/legalPerson';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const persons = [
      // tslint:disable-next-line:max-line-length
      { id: 1, nome: 'user1', dataDeNascimento: '26/01/1995', cpf: '292.233.131-22', rg: '213232311', cep: '48281-292', logradouro: 'Rua Teste', numero: '233', bairro: 'Centro', cidade: 'Cajazeiras', estado: 'Paraíba', telefone: '(83) 99999-9999', email: 'teste@gmail.com' },
      // tslint:disable-next-line:max-line-length
      { id: 2, cnpj: '99.999.999/9999-99', razaoSocial: 'RazaoTeste', nomeFantasia: 'FantasiaTeste', inscEstadual: 'inscTeste', cep: '48281-292', logradouro: 'Rua Teste 2', numero: '233', bairro: 'Centro 2', cidade: 'Cajazeiras 2', estado: 'Paraíba', telefone: '(83) 89999-9999', email: 'teste2@gmail.com' }
    ];
    return { persons };
  }

  constructor() { }

}
