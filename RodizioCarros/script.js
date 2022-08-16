function placa(){  

    const regexPlacaValida = new RegExp("^[A-Z]{3}-[0-9]{4}$");
    const placaDigitado = document.getElementById("placa").value;
    const placa = placaDigitado;
        if (placa.match(regexPlacaValida)) {
            const digito = parseInt(placa[7]);
            switch(digito){
                case 1:
                case 2:
                return  res.innerHTML = "SEGUNDA"
                case 3:
                case 4:   
                return  res.innerHTML = "TERCA"
                
                case 5:
                case 6:   
                return  res.innerHTML = "QUARTA"
               
                case 7:
                case 8:   
                return  res.innerHTML  = "QUINTA"
                case 9:
                case 0:   
                return  res.innerHTML = "SEXTA"
               
            }
           // return  res.innerHTML = ((("FINAL DA PLACA ") + placa[7]) + digito); 
          // TODO: Recupere o digito final da placa e o atribua à constante "digito".
          // TODO: A partir do "digito", crie as condições necessárias para imprimir o dia da semana.
        } else {
            return  res.innerHTML = ("Placa não valida");
        }
      
          
}


