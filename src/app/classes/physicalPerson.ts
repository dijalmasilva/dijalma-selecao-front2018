import { Person } from './person';

export class PhysicalPerson extends Person {

    nome: string;
    dataDeNascimento: number;
    cpf: string;
    rg: string;

    constructor (
      nome: string,
      dataDeNascimento: number,
      cpf: string,
      rg: string,
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
      this.nome = nome;
      this.dataDeNascimento = dataDeNascimento;
      this.cpf = cpf;
      this.rg = rg;
    }
}
