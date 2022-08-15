
const A = parseInt(1.2);
const B = parseInt(6.3);
const total = soma(A, B);

const totalDeDias = 400;

let linhas = "10 90";

print(months['atributo_identificador_do_mes_aqui',monthNumber]);

function teste(){
    const months = {
        "1": "January",
        "2": "February",
        "3": "March",
        "4": "April",
        "5": "May",
        "6": "June",
        "7": "July",
        "8": "August",
        "9": "September",
        "10": "October",
        "11": "November",
        "12": "December"
      };     


   // linhas = linhas.split(" ");
   // let a = linhas[1];
   // return  res1.innerHTML = a;
   //const qtdAnos = Math.floor(totalDeDias / 365);
   //totalDeDias = totalDeDias % 365;
   //return  res1.innerHTML = qtdAnos;
   //return  res2.innerHTML = totalDeDias;     
}

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
    //return  res1.innerHTML = valor;  

} 
//print(total);