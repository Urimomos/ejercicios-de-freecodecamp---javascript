function largestOfAll(arreglos){
    let arregloDeLosMasGrandes = [];
    let numeroMasGrande = 0;
    for(let arregloDeNumeros of arreglos){
        numeroMasGrande = arregloDeNumeros[0];
        for(let i = 0; i < arregloDeNumeros.length; i++){
            if(arregloDeNumeros[i] > numeroMasGrande){
                numeroMasGrande = arregloDeNumeros[i];
            }
        }
        arregloDeLosMasGrandes.push(numeroMasGrande);
        numeroMasGrande = 0;
    }
    return arregloDeLosMasGrandes;
}

console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));