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
    let fraseEnUnion = phraseLength.split(" ");
    console.log(fraseEnUnion);

}

console.log(isPalindrome("ana"));
console.log(findRepeatedPhrases(["the", "cat", "sat", "the", "cat"], "the cat"));