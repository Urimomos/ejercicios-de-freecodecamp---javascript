function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
//console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
//console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

function getWordCount(sentence){
  const spaces = " ";
  const letters = "bcdfghjklmnpqrstvwxyzaeiou"
  let count = 1;
  sentence == "" ? count = 0: sentence;
  for(const char of sentence.toLowerCase()){
    if(letters.includes(char) && char != ""){
      break;
    }
    else return 0;
  }

  for(const char of sentence){
    if(spaces.includes(char)){
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
//console.log(`Punctuation Count: ${punctuationCount}`);
console.log(getWordCount(""));

