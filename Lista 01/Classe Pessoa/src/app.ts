import { Pessoa } from "./pessoa"



/*
 - Instânciar dois objetos da classe Pessoa, um representando Albert Einstein (nascido em 14/3/1879)
e o outro representando Isaac Newton (nascido em 4/1/1643).
 - Mostre no console quais seriam as idades de Einstein e Newton caso estivessem vivos.*/
var albertEinstein: Pessoa
albertEinstein = new Pessoa(0, 14, 3, 1879, "Albert Einstein"); 

albertEinstein.calcularIdade()
var idade:number = albertEinstein.getIdade()
var nome:string = albertEinstein.getNome()
var dataNascimento:string = albertEinstein.setDataDeNascimento()