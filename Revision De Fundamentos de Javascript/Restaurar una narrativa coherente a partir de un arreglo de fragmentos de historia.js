const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(arrDeFrag){
    const copyArr = [...arrDeFrag];
    const arrDeFragElim = copyArr.filter((texto) => {
        if(texto != undefined) return texto;
        else console.log("[COMPACTED]")});
        return arrDeFragElim;
}

function sortFragments(arregloDesordenado) {
    const arregloCopia = arregloDesordenado.slice();
    for(let j = 0; j < arregloCopia.length - 1; j++) {
        for (let i = 0; i < arregloCopia.length - 1; i++) {
            if (arregloCopia[i].id > arregloCopia[i + 1].id) {
                let objeTemp = arregloCopia[i];
                arregloCopia[i] = arregloCopia[i + 1];
                arregloCopia[i + 1] = objeTemp;
            }
        }
    }
    return arregloCopia;
}

function dedupeFragments(arregloOrdenado) {
    let arregloCopia = [];
    const arrIds = [];
    for (let i = 0; i < arregloOrdenado.length; i++) {
        arrIds.push(arregloOrdenado[i].id);
    }
    const arrDeIndexCopy = [];
    for(let i = 0; i < arregloOrdenado.length ; i++) {
        const tempId = arrIds[i];
        for( let j = i + 1; j < arregloOrdenado.length ; j++) {
            if (tempId == arrIds[j] && !arrDeIndexCopy.includes(j)) {
                arrDeIndexCopy.push(j);
            }
        }
    }
    arregloCopia = arregloOrdenado.filter( (elemento, index) => {
        if (!arrDeIndexCopy.includes(index)) {
            return elemento;
        } else {
             console.log("[DEDUPED]");
        }
    });
    return arregloCopia;
}

function fillMissingFragments(arreglo){
    let arregloCopia = arreglo.slice();
    const numeroMaYOR = arreglo[arreglo.length - 1].id;
    for (let i = 1; i < numeroMaYOR; i++) {
        if (arregloCopia[i - 1].id != i) {
            arregloCopia.splice( i - 1, 0 , {id : i , text : "[...]"});
            console.log("[FILLED]");
        }
    }
    return arregloCopia;
}

function assembleStory(arreglo) {
    const arregloCopia = arreglo.slice();
    let cadena = [];
    for (let i = 0; i < arregloCopia.length; i++) {
        let texto = arregloCopia[i].text;
        cadena.push(texto);
    }
    return cadena.join("\n");
}



const compactedShuffledFragments = compactFragments(shuffledFragments);

const sortedFragments = sortFragments(compactedShuffledFragments);

const dedupedFragments = dedupeFragments(sortedFragments);

const filledFragments = fillMissingFragments(dedupedFragments);

console.log(assembleStory(filledFragments));



