

var temperatura = document.getElementById("idTemperatura") as HTMLInputElement
var isCelsius = document.getElementById("idCelsius1") as HTMLInputElement
var isFahrenheit = document.getElementById("idFahrenheit1") as HTMLInputElement
var isKelvin = document.getElementById("idkelvin1") as HTMLInputElement
var out1 = document.getElementById("idOut1") as HTMLOutputElement     
var out2 = document.getElementById("idOut2") as HTMLOutputElement

const btConverter = document.getElementById("idBtConverter") as HTMLInputElement

btConverter.onclick = function ():void {
    console.log(temperatura.value)
    if (isCelsius.checked == true) {
        isCelsiusTrue()
    }
    if (isFahrenheit.checked == true) {
        isFahrenheitTrue()
    }
    if (isKelvin.checked == true) {
        isKelvinTrue()
    }
}

function isCelsiusTrue():void {
    out1.value = "Em fahrenheit: " + (parseFloat(temperatura.value) * 9/5 + 32)
    out2.value = "Em kelvin: " + (parseFloat(temperatura.value) + 273.15)
}
function isFahrenheitTrue():void {
    out1.value = "Em celsius: " + (( parseFloat(temperatura.value) - 32 ) * 5 / 9).toFixed(2)
    out2.value = "Em kelvin: " + (( parseFloat(temperatura.value) - 32) * 5 / 9 + 273.15).toFixed(2)
}
function isKelvinTrue():void {
    out1.value = "Em celsius: " + (parseFloat(temperatura.value) - 273.15).toFixed(2)
    out2.value = "Em fahrenheit: " + (( parseFloat(temperatura.value) - 273.15) * 9 / 5 + 32).toFixed(2)
}





       
/*       
                // Captura dos dados
                var temperatura = Number(document.getElementById("idtemperatura").value)            
                var celsius1 = document.getElementById("idCelsius1").checked
                var fahrenheit1 = document.getElementById("idFahrenheit1").checked
                var kelvin1 = document.getElementById("idkelvin1").checked
                var out1 = document.getElementById("idOut1")               
                var out2 = document.getElementById("idOut2")       
                var temperaturaFinal1
                var temperaturaFinal2

                if (celsius1 == true) {
                    // Converção de celcius para as outras duas
                    temperaturaFinal1 = "Em fahrenheit: " + (( temperatura * 9/5) + 32).toFixed(2)
                    temperaturaFinal2 = "Em kelvin: " + (temperatura + 273.15).toFixed(2)
                }
                else if (fahrenheit1 == true) {
                    // Converção de fahrenheit para as outras duas
                    temperaturaFinal1 = "Em celsius: " + (( temperatura - 32 ) * 5 / 9).toFixed(2)
                    temperaturaFinal2 = "Em kelvin: " + (( temperatura - 32) * 5 / 9 + 273.15).toFixed(2)
                }
                else if (kelvin1 == true) {
                    // Converção de kelvin para as outras duas
                    temperaturaFinal1 = "Em celsius: " + (temperatura - 273.15).toFixed(2)
                    temperaturaFinal2 = "Em fahrenheit: " + (( temperatura - 273.15) * 9 / 5 + 32).toFixed(2)
                }
               // Saída dos dados
                out1.value = temperaturaFinal1
                out2.value = temperaturaFinal2
 
*/