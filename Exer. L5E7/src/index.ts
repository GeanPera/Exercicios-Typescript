
var numSorteado:number = Number((Math.random() * 11).toFixed(0));
var cont:number = 0;
var numTentativa:number;

var outMsn = document.getElementById("idOutMsn") as HTMLOutputElement;
var outAlerta = document.getElementById("idOutAlerta") as HTMLOutputElement;

var campoNum = document.getElementById("idNum") as HTMLInputElement;
var botao = document.getElementById("idBtAdivinhar") as HTMLInputElement;

var btAdivinhar = document.getElementById("idBtAdivinhar") as HTMLInputElement;
btAdivinhar.onclick = function () {
    validar();
}
function validar():void {
    let pegarTentativa = document.getElementById("idNum") as HTMLInputElement;
    numTentativa = parseInt(pegarTentativa.value);
    if (numTentativa >= 0 && numTentativa <= 10) {
        adivinhar();
    } else {
        outAlerta.value = "Chute um numero entre 0 e 10"
        campoNum.value = ""
    }

    
}
function adivinhar():void {
    

    if (numTentativa == numSorteado) {
        outMsn.value = "Parabéns, Você acertou!";
        campoNum.value = ""
        campoNum.disabled = true;
        botao.disabled = true;
    }
    if (numTentativa > numSorteado) {
        outMsn.value = "Errado! O numero sorteado é menor que " + numTentativa;
        campoNum.value = ""
        cont++;
    } 
    if (numTentativa < numSorteado) { 
        outMsn.value = "Errado! O numero sorteado é maior que " + numTentativa;
        campoNum.value = ""
        cont++;
    }
    if (cont == 3) {
        campoNum.disabled = true;
        botao.disabled = true;
    
        outMsn.value = "";
        outAlerta.value = "Você errou as 3 tentativas, mais sorte na proxima vez";
        campoNum.value = ""
    }
    
    console.log("Sorteio = " + numSorteado + " Sua tentativa = " + numTentativa);
}
