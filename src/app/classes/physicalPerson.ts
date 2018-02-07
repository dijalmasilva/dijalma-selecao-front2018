import { Person } from './person';

export class PhysicalPerson extends Person {

  nome: string;
  dataDeNascimento: string;
  cpf: string;
  rg: string;

  constructor() {
    super();
  }
}
