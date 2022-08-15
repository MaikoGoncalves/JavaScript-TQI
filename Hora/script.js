function calculaHora(){
    const valorDigitado = document.getElementById("numero").value;
    const total = parseInt(valorDigitado);

    const horas = Math.trunc(total/3600);
    const minutos = Math.trunc((total - (horas * 3600)) / 60);
    const segundos = Math.trunc(total - ((horas * 3600)+(minutos * 60)));

          return  res.innerHTML = (`${horas}:${minutos}:${segundos}`);
}


