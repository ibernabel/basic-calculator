var add = function (num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
};
var subt = function (num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 0; }
    return num1 - num2;
};
var mult = function (num1, num2) {
    if (num1 === void 0) { num1 = 1; }
    if (num2 === void 0) { num2 = 1; }
    return num1 * num2;
};
var divd = function (num1, num2) {
    if (num1 === void 0) { num1 = 1; }
    if (num2 === void 0) { num2 = 1; }
    return (num2 !== 0) ? num1 / num2 : new Error("Can't divide by zero");
};
var pot = function (num, expot) {
    if (num === void 0) { num = 1; }
    if (expot === void 0) { expot = 2; }
    return Math.pow(num, expot);
};
//const pot2 = (num: number = 1): number => num * num;
var sqrt = function (num) {
    if (num === void 0) { num = 1; }
    return Math.sqrt(num);
};
function calc(callback, num1, num2) {
    if (typeof num1 !== 'number' && typeof num1 !== 'undefined') {
        return new Error("Only numbers accepted.");
    }
    if (typeof num2 !== 'number' && typeof num2 !== 'undefined') {
        return new Error("Only numbers accepted");
    }
    return callback(num1, num2);
}
;
console.log(calc(add, 5));
console.log(calc(subt, 8));
console.log(calc(mult, 4));
console.log(calc(divd, 9));
console.log(calc(pot, 5, 3));
console.log(calc(sqrt, 81, 3));
