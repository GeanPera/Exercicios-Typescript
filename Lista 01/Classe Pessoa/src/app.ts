import { Pessoa } from "./pessoa"



/*
 - Instânciar dois objetos da classe Pessoa, um representando Albert Einstein (nascido em 14/3/1879)
e o outro representando Isaac Newton (nascido em 4/1/1643).
 - Mostre no console quais seriam as idades de Einstein e Newton caso estivessem vivos.*/
console.log("----------------------------------------------------------------");

var albertEinstein: Pessoa;
albertEinstein = new Pessoa(0, 14, 3, 1879, "Albert Einstein"); 

albertEinstein.calcularIdade();
var idadeEinstein:number = albertEinstein.getIdade();
var nomeEinstein:string = albertEinstein.getNome();
var dataNascimentoEinstein:string = albertEinstein.setDataDeNascimento();

var dadosEinstein:string = `Nome: ${nomeEinstein} 
Idade: ${idadeEinstein} - Data de nascimento: ${dataNascimentoEinstein}`
console.log(dadosEinstein)

console.log("----------------------------------------------------------------");

var isaacNewton: Pessoa;
isaacNewton = new Pessoa(0, 4, 1, 1643, "Isaac Newton"); 

isaacNewton.calcularIdade();
var idadeNewton:number = isaacNewton.getIdade();
var nomeNewton:string = isaacNewton.getNome();
var dataNascimentoNewton:string = isaacNewton.setDataDeNascimento();

var dadosNewton:string = `Nome: ${nomeNewton} 
Idade: ${idadeNewton} - Data de nascimento: ${dataNascimentoNewton}`
console.log(dadosNewton)

console.log("----------------------------------------------------------------");