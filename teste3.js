// Desenvolver um programa que calcule:
// - Menor valor de faturamento em determinado mês
// - Maior valor de faturamento em determinado mês
// - Número de dias no mês em que o valor de faturamento diário foi superior à média mensal

const dados=require('./dados.json');

function menorValorFaturamento(){
    let menorValor=dados[0].valor;

    for (let elemento of dados){
        if(menorValor>elemento.valor){
            menorValor=elemento.valor;
        }
    }
    
    return `O menor valor é ${menorValor}`;
}

function maiorValorFaturamento(){
    let maiorValor=dados[0].valor;

    for (let elemento of dados){
        if(maiorValor<elemento.valor){
            maiorValor=elemento.valor;
        }
    }
    
    return `O maior valor é ${maiorValor}`;
}

function superiorMediaMensal(){
    let soma=0;
    let mediaMensal=0;
    let contador=0;

    for (let elemento of dados){
        soma+=elemento.valor;
    }

    mediaMensal=soma/dados.length;

    for (let elemento of dados){
        if(elemento.valor>mediaMensal){
            contador+=1;
        }
    }
    
    return `Número de dias no mês em que o valor de faturamento\ndiário foi superior à média mensal é ${contador}`;
}

console.log(menorValorFaturamento()+'\n');
console.log(maiorValorFaturamento()+'\n');
console.log(superiorMediaMensal());
