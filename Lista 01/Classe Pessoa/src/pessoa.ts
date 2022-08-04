export class Pessoa{

    // Atributos
    private idade:number;
    private diaNascimento:number;
    private mesNascimento:number;
    private anoNascimento:number;
    private nome:string;

    // Construtor
    public constructor(idade:number, diaNascimento:number, mesNascimento:number,
        anoNascimento:number, nome:string) {

        this.idade = idade;
        this.diaNascimento = diaNascimento;
        this.mesNascimento = mesNascimento;
        this.anoNascimento = anoNascimento;
        this.nome = nome;

    }

    // Getters e Setters
    public calcularIdade():void{
        const data = new Date()
        this.idade = data.getFullYear() - this.anoNascimento
    }

    public getIdade():number{
        return this.idade
    }

    public getNome():string{
        return this.nome
    }

    public setDataDeNascimento():string {
        let dataNascimento = this.diaNascimento + "/" + this.mesNascimento + "/" + this.anoNascimento 
        return dataNascimento
    }
}