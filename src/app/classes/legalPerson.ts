import { Person } from './person';

export class LegalPerson extends Person {

    cnpj: string;
    razaoSocial: string;
    nomeFantasia: string;
    inscEstadual: string;

    constructor (
      cnpj: string,
      razaoSocial: string,
      nomeFantasia: string,
      inscEstadual: string,
      cep: string,
      logradouro: string,
      numero: string,
      bairro: string,
      cidade: string,
      estado: string,
      telefone: string,
      email: string
    ) {
      super(cep, logradouro, numero, bairro, cidade, estado, telefone, email);
      this.cnpj = cnpj;
      this.razaoSocial = razaoSocial;
      this.nomeFantasia = nomeFantasia;
      this.inscEstadual = inscEstadual;
    }
}
