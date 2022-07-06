"use strict";
var temperaturasEnviadas = [];
var outMedia = document.getElementById("idOutMedia");
var outDiaInfo = document.getElementById("idOutDiaInfo");
var media = 0;
const btEnviarTemperatura = document.getElementById("idEnviarTemperatura");
const btCalcularMedia = document.getElementById("idCalcularMedia");
const btVerificarDia = document.getElementById("idVerificarDia");
btEnviarTemperatura.onclick = function () {
    // capiturando as temperaturas
    let temperatura = document.getElementById("idTemperatura");
    temperaturasEnviadas.push(parseFloat(temperatura.value));
    temperatura.value = "";
};
btCalcularMedia.onclick = function () {
    media = 0;
    for (var i = 0; i < temperaturasEnviadas.length; i++) {
        media += temperaturasEnviadas[i];
    }
    console.log(media);
    media = media / temperaturasEnviadas.length;
    outMedia.value = "A média das temperatura é " + media;
};
btVerificarDia.onclick = function () {
    console.log(temperaturasEnviadas);
    console.log(media);
    let diaInformado = document.getElementById("idDiaInfo");
    let dia = parseFloat(diaInformado.value);
    dia--;
    console.log(dia + "-------");
    if (media > temperaturasEnviadas[dia]) {
        outDiaInfo.value = "A temperatura desse dia é " + temperaturasEnviadas[dia]
            + " e está abaixo da media";
    }
    else if (media < temperaturasEnviadas[dia]) {
        outDiaInfo.value = "A temperatura desse dia é " + temperaturasEnviadas[dia]
            + " e está acima da media";
    }
    else if (media == temperaturasEnviadas[dia]) {
        outDiaInfo.value = "A temperatura desse dia é " + temperaturasEnviadas[dia]
            + " e está igual a media";
    }
};
