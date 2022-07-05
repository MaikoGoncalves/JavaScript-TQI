


function soma(num1, num2){
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    var soma = num1 + num2;    
    const teste = somaMaior(soma);

    return res1.innerHTML = 'Sua soma é ' + ' = ' + soma;
  
}


function comparaNumeros(num1, num2){
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
        
     if(num1 !== num2){
        return res.innerHTML = 'Os Números ' + num1 + ' e ' + num2 +' não são iguais.'

     }
    return res.innerHTML = 'Os Números ' + num1 + ' e ' + num2 +' são iguais.'   
}

function somaMaior(soma){
    var maiorQue = soma;

    if(maiorQue < 10)
    {
       return res2.innerHTML = 'Que é Menor que 10 é Menor que 20';
    } 
        
        else if (maiorQue == 10)
         {
            return res2.innerHTML = ' é Igual a 10 é Menor que 20';
         }
            
             else if (maiorQue == 20 )
             {
                return res2.innerHTML ='Que é Maior que 10 é Igual a 20';
             }
        
                 else if (maiorQue > 20)
                {
                    return res2.innerHTML ='Que é Maior que 10 é Maior que 20';
                }
                     else
                     return res2.innerHTML ='Que é Maior que 10 é Menor que 20';
}
