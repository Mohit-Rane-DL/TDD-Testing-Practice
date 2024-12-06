function reverseString(string){
    let arr = string.split("");
    let reverseArr = [];

    for(let i = arr.length - 1; i >= 0; i--){
        reverseArr.push(arr[i]);
    }
    let reverseStr = reverseArr.join("");

    return reverseStr;
}

module.exports = reverseString;