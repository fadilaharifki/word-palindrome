let word = process.argv[2]
let newWord = ''

for (let i = word.length-1; i >= 0; i--) {
    newWord += word[i];
}

if(word === newWord){
    console.log(`input = ${word} : output = ${newWord}`);
    console.log(true);
} else {
    console.log(`input = ${word} : output = ${newWord}`);
    console.log(false);
}