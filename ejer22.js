function titleCase(cadena){
    const palabras = cadena.split(" ");
    let letras = [];
    for(let letra of palabras){
        letras.push(letra.split(""));
    }
    for(let char of letras){
        if(char[0].charCodeAt(0) >= 97){
            char[0] = String.fromCharCode(char[0].charCodeAt(0) - 32);
        }
        for(let i = 1; i < char.length; i++){
           if(char[i].charCodeAt(0) >= 65 && char[i].charCodeAt(0) <= 90){
                char[i] = String.fromCharCode(char[i].charCodeAt(0) + 32);
            }
        }
    }
    let cadenaDevuelta = [];
    for(let letters of letras){
        cadenaDevuelta.push(letters.join(""));
    }
    return cadenaDevuelta.join(" ");
}

console.log(titleCase("chIngeN a sU MaDRe PUTOs"));