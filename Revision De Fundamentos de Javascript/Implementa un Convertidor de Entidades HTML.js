function convertHTML(cadena){
    const arregloLetras = cadena.split("");
    for(let letra = 0; letra < arregloLetras.length; letra++){
        let codigoAscii = arregloLetras[letra].charCodeAt(0);
        console.log(codigoAscii);
        if(codigoAscii == 34 || codigoAscii == 38 || codigoAscii == 60 || codigoAscii == 62 || codigoAscii == 39){
            arregloLetras.splice(letra, );
        }
    }
}

console.log(convertHTML("Dolce & Gabbana"));