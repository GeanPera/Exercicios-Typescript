"use strict";
var btEnviar = document.getElementById("idBtEnviar");
btEnviar.onclick = function () {
    enviarIdade();
};
var btVerificar = document.getElementById("idBtVerificar");
btVerificar.onclick = function () {
    imprimirStatus();
};
var contMedia = 0;
var media = 0;
var maior18 = 0;
var menor5 = 0;
var maiorIdade = 0;
var outMedia = document.getElementById("idOutMedia");
var outMaior18 = document.getElementById("idOutMaior18");
var outMenor5 = document.getElementById("idOutMenor5");
var outMaiorIdade = document.getElementById("idOutmaiorIdade");
function enviarIdade() {
    let pegarIdade = document.getElementById("idIdade");
    let idade = parseFloat(pegarIdade.value);
    if (idade > 18) {
        maior18++;
    }
    if (idade < 5) {
        menor5++;
    }
    if (idade > maiorIdade) {
        maiorIdade = idade;
    }
    if (idade > 0) {
        contMedia++;
        media = media + idade;
    }
    pegarIdade.value = "";
}
function imprimirStatus() {
    let idadeMedia = media / contMedia;
    idadeMedia.toFixed(2);
    outMedia.value = "Idade media: " + idadeMedia + " anos ";
    outMaior18.value = "Quantidade de pessoas maiores de 18 anos : " + maior18;
    outMenor5.value = "Quantidade de pessoas menores que 5 anos : " + menor5;
    outMaiorIdade.value = " A maior idade digitada é " + maiorIdade + " anos";
}
