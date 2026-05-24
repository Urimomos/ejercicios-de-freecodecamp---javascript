function generatePassword(longitud){
    const letrasYSimbolos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let contraseña = "";
    for(let i = 0; i < longitud; i++){
        contraseña += letrasYSimbolos[Math.floor(Math.random() * ((letrasYSimbolos.length - 1) + 1))];
    }
    return contraseña;
}

const password = generatePassword(8);
console.log("Generated password: " + password);