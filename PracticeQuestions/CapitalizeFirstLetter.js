let word="hello"

splitWord=word.split("")

splitWord[0]=splitWord[0].toUpperCase()

console.log(splitWord.join(""));


// 2 Methods to Capitalize First Letter of a String in JavaScript
for(char in word){
    if(char==0){
        word=word[char].toUpperCase()+word.slice(1);
    }
}

console.log(word);
