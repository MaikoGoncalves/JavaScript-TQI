var currentNumberWrapper=document.getElementById("currentNumber");
var currentNumber = 0;
var contador = 0;
 

function trocarCor(){

    if (contador < 0) { 
        document.getElementById("currentNumber").style.color = "red";
        document.getElementById("h1").style.color = "red";
    }   
        else if (contador > 0) {
            document.getElementById("currentNumber").style.color = "black";
            document.getElementById("h1").style.color = "black";
        }   
             else {
                document.getElementById("currentNumber").style.color = "white";
                document.getElementById("h1").style.color = "white";
             }
}



function increment() {    
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber; 
    contador = contador + 1;
    trocarCor();
}

function decrement() {    
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    contador = contador - 1;
    trocarCor();
}