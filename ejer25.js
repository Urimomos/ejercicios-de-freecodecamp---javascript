function sumAll(arreglo){
    const numMayor = Math.max(...arreglo);
    const numMenor = Math.min(...arreglo);
    let suma = 0;
    for(let i = numMenor; i <= numMayor; i++){
        suma += i;
    }
    return suma;
}

sumAll([1,5])