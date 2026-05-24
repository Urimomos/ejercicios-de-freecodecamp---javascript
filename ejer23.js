const inventory = [
   
];

function findProductIndex(nombreDelProducto){
    for(let objeto = 0; objeto < inventory.length; objeto++){
        if(inventory[objeto].name === nombreDelProducto.toLowerCase()){
            return objeto;
        }
    }
    return -1;
}

function addProduct(objetoDeProducto){
    let productIndex = findProductIndex(objetoDeProducto.name);
    if(productIndex == -1){
        objetoDeProducto.name = objetoDeProducto.name.toLowerCase();
        inventory.push(objetoDeProducto);
        console.log(`${objetoDeProducto.name} added to inventory`);
    }else{
        inventory[productIndex].quantity += objetoDeProducto.quantity;
        console.log(`${inventory[productIndex].name} quantity updated`);
    }
}

function removeProduct(nombreDelProducto, cantidadDelProducto){
     let productIndex = findProductIndex(nombreDelProducto);
     if(productIndex != -1){
        let resta = inventory[productIndex].quantity - cantidadDelProducto;
        if(resta < 0){
            console.log(`Not enough ${inventory[productIndex].name} available, remaining pieces: ${inventory[productIndex].quantity}`);
        }else if(resta == 0){
            inventory.splice(productIndex, 1);
        }else{
            inventory[productIndex].quantity = resta;
            console.log(`Remaining ${inventory[productIndex].name} pieces: ${inventory[productIndex].quantity}`);
        }
     }else{
        console.log(`${nombreDelProducto.toLowerCase()} not found`);
     }
}

addProduct({name: "FLOUR", quantity: 5})
removeProduct("FLOUR", 10);