const reverseString = function(string) {
    let result = "";
    for (let i=string.length - 1; i>=0; i--) {
        result += string.charAt(i);
    }
    return result;
};
reverseString("hello")

// Do not edit below this line
module.exports = reverseString;
