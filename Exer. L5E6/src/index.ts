
var btEnviar = document.getElementById("idBtEnviar") as HTMLInputElement
btEnviar.onclick = function () {
    enviarIdade()
}

var btVerificar = document.getElementById("idBtVerificar") as HTMLInputElement
btVerificar.onclick = function () {
    imprimirStatus()
}

var contMedia: number = 0
var media: number = 0
var maior18: number = 0
var menor5: number = 0
var maiorIdade: number = 0
var outMedia = document.getElementById("idOutMedia") as HTMLOutputElement
var outMaior18 = document.getElementById("idOutMaior18") as HTMLOutputElement
var outMenor5 = document.getElementById("idOutMenor5") as HTMLOutputElement
var outMaiorIdade = document.getElementById("idOutmaiorIdade") as HTMLOutputElement

function enviarIdade():void {
    let pegarIdade = document.getElementById("idIdade") as HTMLInputElement
    let idade:number = parseFloat(pegarIdade.value) 

    if (idade > 18) {
        maior18++
    }
    if (idade < 5) {
        menor5++
    }
    if (idade > maiorIdade) {
        maiorIdade = idade
    }
    if (idade > 0) {
        contMedia++
        media = media + idade
    }

    pegarIdade.value = ""
}
    
function imprimirStatus():void {
    let idadeMedia = media / contMedia
    idadeMedia.toFixed(2)

    outMedia.value = "Idade media: " + idadeMedia + " anos "
    outMaior18.value =  "Quantidade de pessoas maiores de 18 anos : " + maior18
    outMenor5.value = "Quantidade de pessoas menores que 5 anos : " + menor5 
    outMaiorIdade.value = " A maior idade digitada é " + maiorIdade + " anos"
}
