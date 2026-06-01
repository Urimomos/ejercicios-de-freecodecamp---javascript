function parseShipment(rawData){
    const matrizDeObjetos = [];
    for(let cadena of rawData){
        let cadenaSeparada = cadena.split("|");
        let [sku , name, qty, expires, zone] = cadenaSeparada;
        matrizDeObjetos.push(
            {
                sku: sku,
                name: name,
                qty: qty,
                expires: expires,
                zone: zone
            }
        );
    }
    return matrizDeObjetos;
}

const rawData = [
  "A10|Tomatoes|5|2027-01-01",        // no zone field
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry",     // zone: "pantry"
];

console.log(parseShipment(rawData));