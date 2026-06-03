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

function planRestock(pantry, shipment){
    let arregloResultado = [];
    for(let ship of shipment){
        if(ship.qty <= 0){
            arregloResultado.push(
                {
                    type: "discard",
                    item : ship
                }
            );
        }
    }
    return arregloResultado;
}

const rawData = [
  "A10|Tomatoes|5|2027-01-01",        // no zone field
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry", 
  "C32|Eggs|3|2027-01-01|pantry"    // zone: "pantry"
];

const pantry = [{ sku: "D43", name: "Pineapples", qty: 2, expires: "2027-01-01", zone: "general" }];
const shipment = [{ sku: "D43", name: "Pineapples", qty: 0, expires: "2027-01-01", zone: "general" },
                  { sku: "E54", name: "Peppers", qty: -1, expires: "2027-01-01", zone: "fridge" }
                ];

console.log(planRestock(pantry, shipment));