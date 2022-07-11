"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const endereco_1 = require("./endereco");
var endereco;
endereco = new endereco_1.Endereco("100.200.300-00", "SC", "Santa Catarina", "Imaruí", "Praia Vermelha", "Estrada geral de Praia Vermenha", "S/N", "Perto da praia de Gonzaga");
console.log("----------------------------------------------------------------");
console.log(endereco.getEnderecoCompleto());
console.log("----------------------------------------------------------------");
