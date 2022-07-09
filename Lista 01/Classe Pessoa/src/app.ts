import { Pessoa } from "./pessoa"

var pessoa: Pessoa
pessoa = new Pessoa(0, 15, 9, 2005, "Gean"); 

pessoa.calcularIdade()

console.log(pessoa.getIdade());
console.log(pessoa.getNome());
console.log(pessoa.setDataDeNascimento());