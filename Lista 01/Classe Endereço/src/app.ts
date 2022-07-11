import { Endereco } from "./endereco"

var endereco: Endereco
endereco = new Endereco("100.200.300-00", "SC", "Santa Catarina", "Imaruí", "Praia Vermelha",
 "Estrada geral de Praia Vermenha", "S/N", "Perto da praia de Gonzaga"); 

console.log(endereco.getEnderecoCompleto());

