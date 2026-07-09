function diffArray(arreglo1 , arreglo2){
    return arreglo1.filter(elemento => !arreglo2.includes(elemento))
    .concat(arreglo2.filter(elemento => !arreglo1.includes(elemento)));
}

console.log(diffArray(["pinches", "pendejos", "six seven"], 
                    ["pinches", "putos", "xd"]));