function convertHTML(cadena){
    const arregloLetras = cadena.split("");
    for(let letra = 0; letra < arregloLetras.length; letra++){
        let codigoAscii = arregloLetras[letra].charCodeAt(0);
        if(codigoAscii == 34 || codigoAscii == 38 || codigoAscii == 60 || codigoAscii == 62 || codigoAscii == 39){
            switch(codigoAscii){
                case 34:{
                    arregloLetras.splice(letra,1,"&quot;");
                    break;
                }
                case 38:{
                    arregloLetras.splice(letra,1,"&amp;");
                    break;
                }
                case 39:{
                    arregloLetras.splice(letra,1,"&apos;");
                    break;
                }
                case 60:{
                    arregloLetras.splice(letra,1,"&lt;");
                    break;
                }
                case 62:{
                    arregloLetras.splice(letra,1,"&gt;");
                    break;
                }
            }
        }
    }
    return arregloLetras.join("");
}

console.log(convertHTML('Stuff in "quotation marks"'));