function calculadora(){
const cero = document.getElementById("cero"),
    uno = document.getElementById("1"),
    dos = document.getElementById("2"),
    tres = document.getElementById("3"),
    cuatro = document.getElementById("4"),
    cinco = document.getElementById("5"),
    seis = document.getElementById("6"),
    siete = document.getElementById("7"),
    ocho = document.getElementById("8"),
    nueve = document.getElementById("9"),
    punto = document.getElementById("punto"),
    result = document.getElementById("result"),
    div = document.getElementById("divisor"),
    mult = document.getElementById("multiplicador"),
    reslt = document.getElementById("resta"),
    sum = document.getElementById("suma"),
    igual = document.getElementById("igual"),
    reset = document.getElementById("limpiar");

var valorA, valorB, operador;

    function limpiar(){
        result.textContent = "";
    }

    reset.onclick = function(e){
        result.textContent = "";
        valorA = 0;
        valorB = 0;
        operador = "";
    }
    cero.onclick = function(e){
        result.textContent = result.textContent + "0";
    }
    uno.onclick = function(e){
        result.textContent = result.textContent + "1";
    }
    dos.onclick = function(e){
        result.textContent = result.textContent + "2";
    }
    tres.onclick = function(e){
        result.textContent = result.textContent + "3";
    }
    cuatro.onclick = function(e){
        result.textContent = result.textContent + "4";
    }
    cinco.onclick = function(e){
        result.textContent = result.textContent + "5";
    }
    seis.onclick = function(e){
        result.textContent = result.textContent + "6";
    }
    siete.onclick = function(e){
        result.textContent = result.textContent + "7";
    }
    ocho.onclick = function(e){
        result.textContent = result.textContent + "8";
    }
    nueve.onclick = function(e){
        result.textContent = result.textContent + "9";
    }
    punto.onclick = function(e){
        result.textContent = result.textContent + ".";
    }

    div.onclick = function(e){
        valorA = result.textContent;
        operador = "/";
        limpiar();
    }

    mult.onclick = function(e){
        valorA = result.textContent;
        operador = "*";
        limpiar();
    }

    reslt.onclick = function(e){
        valorA = result.textContent;
        operador = "-";
        limpiar();
    }

    sum.onclick =  function(e){
        valorA = result.textContent;
        operador = "+";
        limpiar();
    }

    function resolver(){
        switch(operador){
            case "/":
                result.textContent = parseFloat(valorA) / parseFloat(valorB);
                break;
            case "*":
                result.textContent = parseFloat(valorA) * parseFloat(valorB);
                break;
            case "-":
                result.textContent = parseFloat(valorA) - parseFloat(valorB);
                break;
            case "+":
                result.textContent = parseFloat(valorA) + parseFloat(valorB);
                break;
        }
    }

    igual.onclick = function(e){
        valorB = result.textContent;
        resolver();
    }
}