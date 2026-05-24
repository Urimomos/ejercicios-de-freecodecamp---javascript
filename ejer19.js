function frankenSplice(arregloUno, arregloDos, indice){
    const copiaUno = arregloUno.slice();
    const copiaDos = arregloDos.slice();
    for(let elemento of copiaUno) {
        copiaDos.splice(indice, 0, elemento);
        indice++;
    }
    return copiaDos;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));