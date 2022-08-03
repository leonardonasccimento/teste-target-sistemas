// Desenvolver um programa que calcule o percentual de cada estado, baseado nos respectivos lucros obtidos

const dados2=require('./dados2.json');

function percentualEstados(){
    let valorTotal=0;

    for (let elemento of dados2){
        valorTotal+=elemento.valor;
    }

    for (let elemento of dados2){
        console.log(`${elemento.estado} - R$ ${elemento.valor.toString().replace('.',',')} -> ${(elemento.valor/valorTotal).toFixed(2)*100} %`);
    }
}

percentualEstados();
