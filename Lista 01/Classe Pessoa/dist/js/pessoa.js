"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(idade, diaNascimento, mesNascimento, anoNascimento, nome) {
        this.idade = idade;
        this.diaNascimento = diaNascimento;
        this.mesNascimento = mesNascimento;
        this.anoNascimento = anoNascimento;
        this.nome = nome;
    }
    calcularIdade() {
        const data = new Date();
        this.idade = data.getFullYear() - this.anoNascimento;
    }
    getIdade() {
        return this.idade;
    }
    getNome() {
        return this.nome;
    }
    setDataDeNascimento() {
        return this.diaNascimento + "/" + this.mesNascimento + "/" + this.anoNascimento;
    }
}
exports.Pessoa = Pessoa;
