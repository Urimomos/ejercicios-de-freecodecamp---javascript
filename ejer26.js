function pairElement(cadena){
    let arregloDePares = [];
    for(let caracter of cadena){
        let char = caracter.charCodeAt(0);
        switch(char){
            case 65:{
                arregloDePares.push(["A","T"]);
                break;
            }
            case 84:{
                arregloDePares.push(["T","A"]);
                break;
            }
            case 67:{
                arregloDePares.push(["C","G"]);
                break;
            }
            case 71:{
                arregloDePares.push(["G","C"]);
                break;
            }
        }
    }
    return arregloDePares;
}

console.log(pairElement("ATCG"));