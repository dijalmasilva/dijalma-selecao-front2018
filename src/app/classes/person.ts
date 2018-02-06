export class Person {
  id: number;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  telefone: string;
  email: string;

  constructor(
    id: number,
    cep: string,
    logradouro: string,
    numero: string,
    bairro: string,
    cidade: string,
    estado: string,
    telefone: string,
    email: string
  ) {
    this.cep = cep;
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.telefone = telefone;
    this.email = email;
  }

}
