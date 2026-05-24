function findLongestWordLength(cadena){
    const arreglos = cadena.split(" ");
    let numeroDeCaracteres = 0;
    for(let palabra of arreglos){
        if(palabra.length > numeroDeCaracteres){
            numeroDeCaracteres = palabra.length;
        }
    }
    return numeroDeCaracteres;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));