var temperaturasEnviadas: number[] = [];
var outMedia = document.getElementById("idOutMedia") as HTMLOutputElement;
var outDiaInfo = document.getElementById("idOutDiaInfo") as HTMLOutputElement;
var media: number = 0;
const btEnviarTemperatura = document.getElementById("idEnviarTemperatura") as HTMLInputElement;
const btCalcularMedia = document.getElementById("idCalcularMedia") as HTMLInputElement;
const btVerificarDia = document.getElementById("idVerificarDia") as HTMLInputElement;

btEnviarTemperatura.onclick = function ():void {
    // capiturando as temperaturas

    let temperatura = document.getElementById("idTemperatura") as HTMLInputElement;

    temperaturasEnviadas.push(parseFloat(temperatura.value));
    temperatura.value = "";
}
btCalcularMedia.onclick = function ():void {
    media = 0
    for (var i = 0; i < temperaturasEnviadas.length; i++) {                        
        media+= temperaturasEnviadas[i];
    }
    console.log(media)
    media = media / temperaturasEnviadas.length;
    outMedia.value = "A média das temperatura é " + media;

}
btVerificarDia.onclick = function ():void {
    console.log(temperaturasEnviadas)
    console.log(media)
    let diaInformado = document.getElementById("idDiaInfo") as HTMLInputElement;
    let dia: number = parseFloat(diaInformado.value);
    dia--
    console.log(dia + "-------")
    if (media > temperaturasEnviadas[dia]) {
        outDiaInfo.value = "A temperatura desse dia é " + temperaturasEnviadas[dia]
         + " e está abaixo da media";

    } else if (media < temperaturasEnviadas[dia]) {
        outDiaInfo.value = "A temperatura desse dia é " + temperaturasEnviadas[dia] 
        + " e está acima da media";

    } else if (media == temperaturasEnviadas[dia]) {
        outDiaInfo.value = "A temperatura desse dia é " + temperaturasEnviadas[dia] 
        + " e está igual a media";
    }
}
