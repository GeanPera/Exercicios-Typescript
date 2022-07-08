
var circulo = document.getElementById("idCirculo") as HTMLInputElement;
var retangulo = document.getElementById("idRetangulo") as HTMLInputElement;
var triRetangulo = document.getElementById("idTrianguloRetangulo") as HTMLInputElement;
var equilatero = document.getElementById("idTrianguloEquilatero") as HTMLInputElement;
var num1:HTMLInputElement;
var num2:HTMLInputElement;
var labelNum1 = document.getElementById("idLabel1") as HTMLLabelElement;
labelNum1.hidden = true;

var inputNum1 = document.getElementById("idNum1") as HTMLInputElement;
inputNum1.hidden = true;

var labelNum2 = document.getElementById("idLabel2") as HTMLLabelElement;
labelNum2.hidden = true;

var inputNum2 = document.getElementById("idNum2") as HTMLInputElement;
inputNum2.hidden = true;

var out = document.getElementById("idOut") as HTMLOutputElement;
var area: number;
let resposta:number;

var btCalcularArea = document.getElementById("idCalcularArea") as HTMLInputElement; 
btCalcularArea.hidden = true;
btCalcularArea.onclick = function() {
    num1 = document.getElementById("idNum1") as HTMLInputElement;
    num2 = document.getElementById("idNum2") as HTMLInputElement;
    console.log(num1.value)
    console.log(num2.value)
    resposta = calcularArea();
    imprimir(resposta)
    
}
function calcularArea():number {

    if (circulo.checked) {
        if (num1.value == "") {
            alert("Campo em branco");
        } else {
            area = areaCirculo();
        }

    } else if (retangulo.checked) {
        if (num1.value == "" || num2.value == "") {
            alert("Campo em branco");
        } else {
            area = areaRetangulo();
        }

    } else if (triRetangulo.checked) {
        if (num1.value == "" || num2.value == "") {
            alert("Campo em branco");
        } else {
            area = areaTriRetangulo();
        }

    } else {
        if (num1.value == "") {
            alert("Campo em branco");
        } else {
            area = areaEquilatero();
        }

    }
    return area
}
function areaCirculo():number {
    return parseFloat(num1.value) * parseFloat(num1.value) * Math.PI;
}
function areaRetangulo():number {
    return parseFloat(num1.value) * parseFloat(num2.value);
}
function areaTriRetangulo():number {
    return (parseFloat(num1.value) * parseFloat(num2.value)) / 2;
}
function areaEquilatero():number {
    return ((parseFloat(num1.value) * parseFloat(num1.value)) * (3 **(1/2)))/4;
}
circulo.onclick = function () {

    // Mostrar o label e o input para digitar o numero 1
    labelNum1.hidden = false;
    inputNum1.hidden = false;

    // Ocultar o label e o input para digitar o numero 2
    labelNum2.hidden = true;
    inputNum2.hidden = true;

    // Mostrar o botão para calcular a area
    btCalcularArea.hidden = false;

    // Mudar o nome do label
    labelNum1.innerText = "Radio"
    
}
retangulo.onclick = function () {

    // Mostrar o label e o input para digitar o numero 1
    labelNum1.hidden = false;
    inputNum1.hidden = false;
    
    // Mostrar o label e o input para digitar o numero 2
    labelNum2.hidden = false;
    inputNum2.hidden = false;

    // Mostrar o botão para calcular a area
    btCalcularArea.hidden = false;

    // Mudar o nome do label
    labelNum1.innerText = "Base"
    labelNum2.innerText = "Altura"

}
triRetangulo.onclick = function () {

    // Mostrar o label e o input para digitar o numero 1
    labelNum1.hidden = false;
    inputNum1.hidden = false;

    // Mostrar o label e o input para digitar o numero 2
    labelNum2.hidden = false;
    inputNum2.hidden = false;

    // Mostrar o botão para calcular a area
    btCalcularArea.hidden = false;

    // Mudar o nome do label
    labelNum1.innerText = "Base"
    labelNum2.innerText = "Altura"

}
equilatero.onclick = function () {
    

    // Mostrar o label e o input para digitar o numero 1
    labelNum1.hidden = false;
    inputNum1.hidden = false;

    // Mostrar o label e o input para digitar o numero 2
    labelNum2.hidden = true;
    inputNum2.hidden = true;

    // Mostrar o botão para calcular a area
    btCalcularArea.hidden = false;

    // Mudar o nome do label
    labelNum1.innerText = "Lado"

}
function imprimir(resposta: number):void {
    out.value = "A area é " + resposta.toFixed(2);
}

