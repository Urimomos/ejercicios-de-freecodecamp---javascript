function fearNotLetter(cadena){
    const abecedario = "abcdefghijklmnopqrstuvwxyz";
    const cadenaDeSlice = abecedario.slice(abecedario.indexOf(cadena[0]), abecedario.indexOf(cadena[cadena.length -1]) + 1);
    for( let char of cadenaDeSlice) {
        if(!cadena.includes(char)){
            return abecedario[abecedario.indexOf(char)];
        }
    }
    return undefined;
}

console.log(fearNotLetter("abce"));

const shoppingList = { tomatoes: 4, apples: 10 };
for (const item in shoppingList) {
  console.log(item);
}