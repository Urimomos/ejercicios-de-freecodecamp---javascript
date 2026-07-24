function smallestCommons(arreglo){
    const arregloOrdenado = arreglo.sort((a, b) => a - b);
    let arregloDeNums = [];
    for(let i = arregloOrdenado[0]; i <= arregloOrdenado[1]; i++){
        arregloDeNums.push(i);
    }
    const arregloDeFactores = minimoComun(arregloDeNums, arregloOrdenado[1]);
    const suma = arregloDeFactores.reduce((acumulador , valorActual) => {
        return acumulador * valorActual;
    } , 1);
    
    return suma;
}
function minimoComun(arreglo, maxNum){
    let arrDeFac = [];
    let arrDePrimos = [];
    let arrAux = [];
    for(let i = 1; i <= maxNum; i++){
        if(esPrimo(i)) arrDePrimos.push(i);
    }
    do{
        for(let i = 0; i < arrDePrimos.length; i++){
            if(arreglo.some( element => element % arrDePrimos[i] === 0)) arrDeFac.push(arrDePrimos[i]);
            arrAux = arreglo.map((elemento, index) => {
                if(elemento % arrDePrimos[i] === 0){
                    arreglo.splice(index, 1, elemento / arrDePrimos[i]);
                    return elemento / arrDePrimos[i];
                }else{
                    return elemento;
                }
            });
        }
    }while(!arrAux.every(elemento => elemento == 1));
    return arrDeFac;
}
function esPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; 
    }
  }
  return true; 
}



console.log(smallestCommons([5, 1]));
//console.log(smallestCommons([2, 10]));
//console.log(smallestCommons([23, 18]));