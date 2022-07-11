export class Endereco{

    cep:string;
    uf:string;
    estado:string;
    cidade:string;
    bairro:string;
    rua:string;
    numeroResidencia:string;
    complemento:string;

    constructor(cep:string, uf:string, estado:string, cidade:string, bairro:string,
         rua:string, numeroResidencia:string, complemento:string) {

        this.cep = cep;
        this.uf = uf;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numeroResidencia = numeroResidencia;
        this.complemento = complemento;

    }
    getEnderecoCompleto():string{
        let enderecoCompleto:string = `
            ${this.bairro} - ${this.cidade}, ${this.uf} (${this.estado}) - Cep: ${this.cep} 
            Rua: ${this.rua}, Numero da residencia: ${this.numeroResidencia}, Complemento: ${this.complemento}.
        `
        return enderecoCompleto
    }
}
