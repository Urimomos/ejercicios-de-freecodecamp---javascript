function parseShipment(rawData){
    const arregloDeSkuRepetidos = [];
    const matrizDeObjetos = [];
    for(let cadena of rawData){
        let [sku , name, qty, expires, zone] = cadena.split("|");
        if(arregloDeSkuRepetidos.includes(sku)){
            continue;
        }
        arregloDeSkuRepetidos.push(sku);
        matrizDeObjetos.push(
            {
                sku: sku,
                name: name,
                qty: parseInt(qty),
                expires: expires,
                zone: zone || "general"
            }
        );
    }
    return matrizDeObjetos;
}

const rawData = [
  "A10|Tomatoes|5|2027-01-01",        // no zone field
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry", 
  "C32|Eggs|3|2027-01-01|pantry"    // zone: "pantry"
];

console.log(parseShipment(rawData));