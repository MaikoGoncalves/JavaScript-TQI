
const A = parseInt(1.2);
const B = parseInt(6.3);
const total = soma(A, B);

function soma()
{
    var valor=0;
    if (A<B && A>0)
    {
         for(let i=A ; i <= B ; i++)   
         {  
             valor = valor + i;
         }
    }           
        // return  valor; 
     
        else {
                for(let i=B ; i <= A ; i++)   
                {
                    valor = valor + i;
                }           
                // return valor;    
             }
    return  res1.innerHTML = valor;  
} 
//print(total);