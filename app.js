var add = function (num1, num2) { return num1 + num2; };
var subt = function (num1, num2) { return num1 - num2; };
var mult = function (num1, num2) { return num1 * num2; };
var div = function (num1, num2) { return (num2 !== 0) ? num1 / num2 : "Can't divide by zero"; };
var pot = function (num) { return num * num; };
var sqrt = function (num) { return Math.sqrt(num); };
function calc(callback, num1, num2) {
    console.log(callback);
    if (!num1) {
        return "Missed first Param";
    }
    if (typeof num1 !== 'number') {
        return "Only numbers are accepted.";
    }
    if (num2) {
        if (typeof num2 !== 'number') {
            return "Only numbers are accepted.";
        }
        return callback(num1, num2);
    }
    else {
        return callback(num1);
    }
}
;
/*
console.log(sqrt(25));
console.log(div(25, 0));
console.log(div(25, 10));
console.log(add(25, 10));
console.log(subt(25, 10));
*/
//console.log(calc(add, 25, 10));
//console.log(calc(add, 25));
console.log(calc(subt, 25, 5));
console.log(calc(subt, 25, 10));
//console.log(calc(subt, 25, 10));
//console.log(calc(div, 25, 10));
//console.log(calc(sqrt, 25)); // error
