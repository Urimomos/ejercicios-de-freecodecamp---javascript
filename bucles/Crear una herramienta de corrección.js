function isPalindrome(word){
    let palabraInversa = word.split("").reverse().join("");
    if(word.toLowerCase() === palabraInversa.toLowerCase()){
        return true;
    }else{
        return false;
    }
}

function findPalindromeBreaks(words){
    let indicesDeNoPalindromos = [];
    if(words.length != 0){
        for(let i = 0; i < words.length; i++){
            if(!isPalindrome(words[i])){
                indicesDeNoPalindromos.push(i);
            }
        }
        return indicesDeNoPalindromos;
    }
    return [];
}

function findRepeatedPhrases(words, phraseLength){
    let arregloDeCoincidencias = [];
    if(phraseLength >= words.length){
        return [];
    }
    let wordsCopia = words.slice();
    for(let i = 0; i < words.length; i++){
        fraseTomada = words.slice(i,i + phraseLength);
        wordsCopia.splice(i,phraseLength);
        for(let j = 0; j < wordsCopia.length; j++){
            if (fraseTomada.join(" ") === wordsCopia.slice(j, j + phraseLength).join(" ")) {
            arregloDeCoincidencias.push(i);
            }
        } 
        wordsCopia = words.slice();
    }
    return arregloDeCoincidencias;
}

function analyzeTexts(texts, phraseLength){
    let resultado = [];
    if(texts.length == 0){
        return [];
    }
    if(typeof texts[0] == "string"){
        resultado.push(
        {
            repeatedPhrases : findRepeatedPhrases(texts, phraseLength),
            palindromeBreaks: findPalindromeBreaks(texts)
        }
        );
        return resultado;
    }
    for(let text of texts){
    resultado.push(
        {
            repeatedPhrases : findRepeatedPhrases(text, phraseLength),
            palindromeBreaks: findPalindromeBreaks(text)
        }
        );
        }
    return resultado;
}

console.log(analyzeTexts([["racecar","level","hello","level"],["the", "cat", "sat", "the", "cat"]],2));
console.log(analyzeTexts(["racecar","level","hello","level"],1));
