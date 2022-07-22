function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos 
    } anos de idade.`;
    
}
const pessoa = {
    nome: 'Helena',
    idade: 26,
};

res1.innerHTML = calculaIdade.call(pessoa, 10);