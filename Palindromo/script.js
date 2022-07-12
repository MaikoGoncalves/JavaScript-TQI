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
function ehPalindromo(palavra, palavraReal){
    var palavraReal = document.getElementById("frase").value;
    palavra = limpaPalavra(palavra);
    var palavraInvertida = palavra.split("").reverse().join("");
    if(palavraInvertida == palavra){
        return res.innerHTML = 'A Palavra ou Frase: " ' + palavraReal + ' " é Palindromo'  
    }
    return res.innerHTML = 'A Palavra ou Frase: " ' + palavraReal + ' " Não é Palindromo' 
}