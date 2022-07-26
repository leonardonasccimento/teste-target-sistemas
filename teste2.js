
let numero=5;

function fibonacci(numero){
    const vetor=[0,1];

    if(numero>7778742049){
        return 'O valor informado não deve ser maior que 7778742049';
    }

    while(vetor.length<50){
        vetor.push(vetor[vetor.length-1]+vetor[vetor.length-2]);
    }

    for (let elemento of vetor){
        if(numero===elemento){
            return 'Este número pertence à sequência Fibonacci.';
        }
    }

    return 'Este número não pertence à sequência Fibonacci.';
}

console.log(fibonacci(numero));