function reverseString(cadena){
    let arregloDePalabraInvertidas = [];
    const arregloDePalabras = cadena.split(" ");
    for(const palabra of arregloDePalabras){
        arregloDePalabraInvertidas.push(palabra.split("").reverse().join(""));
    }
    return arregloDePalabraInvertidas.reverse().join(" ");
}


console.log(reverseString("sodot erdam us a neugnihC"));
