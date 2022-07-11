"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./pessoa");
/*
 - Instânciar dois objetos da classe Pessoa, um representando Albert Einstein (nascido em 14/3/1879)
e o outro representando Isaac Newton (nascido em 4/1/1643).
 - Mostre no console quais seriam as idades de Einstein e Newton caso estivessem vivos.*/
var AlbertEinstein;
AlbertEinstein = new pessoa_1.Pessoa(0, 14, 3, 1879, "Albert Einstein");
AlbertEinstein.calcularIdade();
console.log(AlbertEinstein.getIdade());
console.log(AlbertEinstein.getNome());
console.log(AlbertEinstein.setDataDeNascimento());
