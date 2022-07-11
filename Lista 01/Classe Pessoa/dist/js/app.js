"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./pessoa");
/*
 - Instânciar dois objetos da classe Pessoa, um representando Albert Einstein (nascido em 14/3/1879)
e o outro representando Isaac Newton (nascido em 4/1/1643).
 - Mostre no console quais seriam as idades de Einstein e Newton caso estivessem vivos.*/
console.log("----------------------------------------------------------------");
var albertEinstein;
albertEinstein = new pessoa_1.Pessoa(0, 14, 3, 1879, "Albert Einstein");
albertEinstein.calcularIdade();
var idadeEinstein = albertEinstein.getIdade();
var nomeEinstein = albertEinstein.getNome();
var dataNascimentoEinstein = albertEinstein.setDataDeNascimento();
var dadosEinstein = `Nome: ${nomeEinstein} 
Idade: ${idadeEinstein} - Data de nascimento: ${dataNascimentoEinstein}`;
console.log(dadosEinstein);
console.log("----------------------------------------------------------------");
var isaacNewton;
isaacNewton = new pessoa_1.Pessoa(0, 4, 1, 1643, "Isaac Newton");
isaacNewton.calcularIdade();
var idadeNewton = isaacNewton.getIdade();
var nomeNewton = isaacNewton.getNome();
var dataNascimentoNewton = isaacNewton.setDataDeNascimento();
var dadosNewton = `Nome: ${nomeNewton} 
Idade: ${idadeNewton} - Data de nascimento: ${dataNascimentoNewton}`;
console.log(dadosNewton);
console.log("----------------------------------------------------------------");
