function limpaPalavra(palavra){
    var palavra = document.getElementById("frase").value;
    palavra = palavra.toLowerCase();
    palavra = palavra.replace(/[áàãâ]+/gi, "a");
    palavra = palavra.replace(/[éèê]+/gi, "e");
    palavra = palavra.replace(/[íìî]+/gi, "i");
    palavra = palavra.replace(/[óòôõ]+/gi, "o");
    palavra = palavra.replace(/[úùû]+/gi, "u");
    palavra = palavra.replace(/[ ,-]+/gi, "");
    return palavra;
}

function ehPalavraFrase (palavraFrase, palavraNova){
    var palavraNova = document.getElementById("frase").value;
    let palavraT = Array.from(palavraNova);
    var palavraFrase = 'Palavra';
    
    for(let i = 0 ;  i < palavraT.length ; i++)
    {
         if (palavraT[i] === " ")
         {
            palavraFrase = "Frase";
         } 
    }
    return  palavraFrase;

}
function ehPalindromo(palavra, palavraReal, palavraFrase){
    var palavraReal = document.getElementById("frase").value;
    
    palavraFrase = ehPalavraFrase(palavraFrase);
    
    palavra = limpaPalavra(palavra);
    var palavraInvertida = palavra.split("").reverse().join("");
    if(palavraInvertida == palavra){
        return res.innerHTML = 'A '+ palavraFrase + ' : " ' + palavraReal + ' " é Palindromo'  
    }
    return res.innerHTML = 'A '+ palavraFrase + ' : " ' + palavraReal + ' " Não é Palindromo' 
}