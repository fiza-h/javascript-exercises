const sumAll = function(num1, num2) {
    let a;
    let b;
    let f = [90, 1];
    let x = typeof f;
    if ((typeof num1 != "number") || (typeof num2 != "number") || (num1 < 0) || (num2 < 0)) {
        return "ERROR";
    }
    if (num1 > num2) {
        a = num2;
        b = num1;
    }
    else {
        a = num1;
        b = num2;
    }
    let sum = 0;
    for(let i=a; i<=b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
