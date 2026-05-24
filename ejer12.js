function chunkArrayInGroups(arreglo, tam){
    const resultado = [];
    for (let i = 0; i < arreglo.length; i += tam) {
    resultado.push(arreglo.slice(i, i + tam));
    }

  return resultado;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 7));