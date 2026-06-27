function sumFibs(numero){
    let sumImpar = 0;
    let conta = 0;
    while(sumImpar < numero && terminoFibo(conta) <= numero){
        if(terminoFibo(conta) % 2 != 0){
            sumImpar += terminoFibo(conta);
        }
        conta++;
    }
    return sumImpar;
}

function terminoFibo(num){
    let sumaFibo = 0;
    let terminoPrimero = 0;
    let terminoSegundo = 1;
    for(let i = 0; i < num; i++){
        sumaFibo = terminoPrimero + terminoSegundo;
        terminoPrimero = terminoSegundo;
        terminoSegundo = sumaFibo;

    }
    return terminoPrimero;
}

console.log(sumFibs(75024));