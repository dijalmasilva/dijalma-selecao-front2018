import { Person } from './person';

export class LegalPerson extends Person {

  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  inscEstadual: string;

  constructor() {
    super();
  }
}
