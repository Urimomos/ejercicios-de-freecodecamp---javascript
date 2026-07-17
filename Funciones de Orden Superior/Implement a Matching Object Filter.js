function whatIsInAName(arrObjetos, objSource){
    return arrObjetos.filter(
        objeto => {
            let arregloDeProps = [];
            let arregloDeSource = [];
            let arregloDeElem = [];
            let arregloDeElemSource = [];
            for(let prop in objeto){
                arregloDeProps.push(prop);
                arregloDeElem.push(objeto[prop]);
            }
            for(let prop in objSource){
                arregloDeSource.push(prop);
                arregloDeElemSource.push(objSource[prop]);
            }
            if(arregloDeSource.every(propiedad => arregloDeProps.includes(propiedad)) && arregloDeElemSource.every(elemento => arregloDeElem.includes(elemento))){
                for(let prop of arregloDeSource){
                    if(!(objeto[prop] == objSource[prop])) return false;
                }
                return true;
            }
        }
    );
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, 
                { first: "Mercutio", last: null },
                { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
                //[{ first: "Tybalt", last: "Capulet" }]

console.log(whatIsInAName([{ "apple": 1, "bat": 2 },
                { "apple": 1 }, 
                { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
                // [{"apple": 1, "bat": 2, "cookie": 2}]
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}));

