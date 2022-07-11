"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    constructor(cep, uf, estado, cidade, bairro, rua, numeroResidencia, complemento) {
        this.cep = cep;
        this.uf = uf;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numeroResidencia = numeroResidencia;
        this.complemento = complemento;
    }
    getEnderecoCompleto() {
        let enderecoCompleto = `
            ${this.bairro} - ${this.cidade}, ${this.uf} (${this.estado}) - Cep: ${this.cep} 
            Rua: ${this.rua}, Numero da residencia: ${this.numeroResidencia}, Complemento: ${this.complemento}.
        `;
        return enderecoCompleto;
    }
}
exports.Endereco = Endereco;
