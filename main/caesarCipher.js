function caesarCipher(string, shiftFactor){
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newString = "";

    for(let i = 0; i < string.length; i++){
        if(letters.includes(string[i])){
            let index = letters.indexOf(string[i]) + shiftFactor;
            let allLetters = letters.concat(letters);
            newString += allLetters[index];
        }
        else if(capitalLetters.includes(string[i])){
            let index = capitalLetters.indexOf(string[i]) + shiftFactor;
            let allCapitalLetters = capitalLetters.concat(capitalLetters);
            newString += allCapitalLetters[index];
        }
        else{
            newString += string[i];
        }
    }
    return newString;
}

caesarCipher("HeLLo", 3);

module.exports = caesarCipher;