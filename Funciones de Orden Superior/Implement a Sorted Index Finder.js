function getIndexToIns(arreglo, numero){
    const arregloOrdenado = arreglo.sort((a, b) => a - b);
    if(Math.max(...arregloOrdenado) < numero){
        return arregloOrdenado.length;
    }else{
        return arregloOrdenado.findIndex((a, b, c) => a < numero && numero <= c[b+1]) + 1;
    }
    
}

console.log(getIndexToIns([3, 10, 5], 11));