function destroyer(arreglo, ...elementosEliminados){
    return arreglo.filter((elemento => !elementosEliminados.includes(elemento)))
}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
