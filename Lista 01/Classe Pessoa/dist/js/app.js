"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./pessoa");
var pessoa;
pessoa = new pessoa_1.Pessoa(0, 15, 9, 2005, "Gean");
pessoa.calcularIdade();
console.log(pessoa.getIdade());
console.log(pessoa.getNome());
console.log(pessoa.setDataDeNascimento());
