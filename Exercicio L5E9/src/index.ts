var temperatura = document.getElementById("idTemperatura") as HTMLInputElement
var isCelsius = document.getElementById("idCelsius1") as HTMLInputElement
var isFahrenheit = document.getElementById("idFahrenheit1") as HTMLInputElement
var isKelvin = document.getElementById("idkelvin1") as HTMLInputElement
var out1 = document.getElementById("idOut1") as HTMLOutputElement     
var out2 = document.getElementById("idOut2") as HTMLOutputElement

const btConverter = document.getElementById("idBtConverter") as HTMLInputElement

btConverter.onclick = function ():void {
    
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