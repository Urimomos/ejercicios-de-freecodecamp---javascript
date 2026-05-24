function findElement(arreglo, funcionPasada){
    for(let elemento of arreglo){
        if(funcionPasada(elemento)){
            return elemento;
        }
    }
    return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));