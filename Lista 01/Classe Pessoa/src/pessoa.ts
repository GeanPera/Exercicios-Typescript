export class Pessoa{
    idade:number;
    diaNascimento:number;
    mesNascimento:number;
    anoNascimento:number;
    nome:string;

    constructor(idade:number, diaNascimento:number, mesNascimento:number,
        anoNascimento:number, nome:string) {

        this.idade = idade;
        this.diaNascimento = diaNascimento;
        this.mesNascimento = mesNascimento;
        this.anoNascimento = anoNascimento;
        this.nome = nome;

    }
    calcularIdade():void{
        const data = new Date()
        this.idade = data.getFullYear() - this.anoNascimento
    }

    getIdade():number{
        return this.idade
    }

    getNome():string{
        return this.nome
    }

    setDataDeNascimento():string {
        return this.diaNascimento + "/" + this.mesNascimento + "/" + this.anoNascimento
    }
}