function repeatStringNumTimes(cadena, num){
    let result = "";
    if(!(num <= 0)){
        for(let i = 0; i < num; i++){
            result = result.concat(cadena);
        }
        return result;
    }else{
        return "";
    }
}

console.log(repeatStringNumTimes("*", 3));