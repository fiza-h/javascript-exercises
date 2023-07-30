const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    if (typeof(num) == "string") {
        num = parseInt(num);
    }

    let a = 0;
    let b = 1;

    for (let i = 2; i <= num; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }

    return b;
};

fibonacci(4); // 1 1 2 3
// Do not edit below this line
module.exports = fibonacci;
