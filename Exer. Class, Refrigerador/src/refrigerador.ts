class Refrigerador {

    cor: string;
    modelo: string;
    marca: string;
    tempCongelador: number;

    constructor(cor: string, modelo: string, marca: string, tempCongelador: number) {

        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
        this.tempCongelador = tempCongelador;

    }

    temperaturaCongelador(temperatura: number):void{
        this.tempCongelador = temperatura; 
    }

    modoTurbo(tempo: number): void{ 
        this.tempCongelador = this.tempCongelador - 10; 

        setTimeout(()=>{
            this.tempCongelador = this.tempCongelador + 10;  
        }, (tempo * 60 * 1000)); 
    }


}