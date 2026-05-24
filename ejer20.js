function pyramid(caracter, filas, upOrDown){
    let arregloDeFilas = [];
    for(let i = 1 + (filas - 1) * 2, j = 0; i >= 1; i -= 2, j++){
        let filaDePiramide = String.fromCharCode(10) + String.fromCharCode(32).repeat(j) + caracter.repeat(i);
        arregloDeFilas.push(filaDePiramide);
    }
    return upOrDown ? arregloDeFilas.join("") + String.fromCharCode(10) : arregloDeFilas.reverse().join("") +  String.fromCharCode(10);
}

console.log(pyramid("p", 6, true));