let lunches = [];

function addLunchToEnd(arreglo , cadena){
    console.log(cadena + " added to the end of the lunch menu.");
    arreglo.push(cadena);
    return arreglo;
}

function addLunchToStart(arreglo , cadena){
    console.log(cadena + " added to the start of the lunch menu.");
    arreglo.unshift(cadena);
    return arreglo;
}

function removeLastLunch(arreglo){
    if(arreglo.length == 0){
        console.log("No lunches to remove.");
    }else{
        console.log(`${arreglo.pop()} removed from the end of the lunch menu.`);
        return arreglo;
    }
}

function removeFirstLunch(arreglo){
    if(arreglo.length == 0){
        console.log("No lunches to remove.");
    }else{
        console.log(`${arreglo.shift()} removed from the start of the lunch menu.`);
        return arreglo;
    }
}

function getRandomLunch(arreglo){
    if(arreglo.length != 0){
        const aleatorio = Math.floor(Math.random() * ((arreglo.length - 1) + 1));
        console.log(`Randomly selected lunch: ${arreglo[aleatorio]}`);
    }else{
        console.log("No lunches available.");
    }
}

function showLunchMenu(arreglo){
    if(arreglo.length != 0){
        console.log("Menu items: ");
    }else{
        console.log("The menu is empty.");
    }
}


addLunchToEnd(["Pizza", "Tacos"], "Burger");
addLunchToStart(["Burger", "Sushi"], "Pizza");
removeLastLunch([]);
removeLastLunch(["Stew", "Soup", "Toast"]);
removeFirstLunch([]);
removeFirstLunch(["Salad", "Eggs", "Cheese"]);
getRandomLunch([]);
getRandomLunch(["Salad", "Eggs", "Cheese"]);
showLunchMenu([]);
showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);