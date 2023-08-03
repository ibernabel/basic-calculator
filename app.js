var add = function (num1, num2) { return num1 + num2; };
var subt = function (num1, num2) { return num1 - num2; };
var mult = function (num1, num2) { return num1 * num2; };
var divd = function (num1, num2) { return (num2 !== 0) ? num1 / num2 : "Can't divide by zero"; };
var pot = function (num) { return num * num; };
var sqrt = function (num) { return Math.sqrt(num); };
function calc(callback, num1, num2) {
    //console.log(num1);
    if (typeof num1 == "undefined" || num1 === null) {
        return "The first parameter is missing";
    }
    if (typeof num1 !== 'number') {
        return "Only numbers accepted.";
    }
    if (!num2) {
        console.log(callback.name);
        if (callback.name !== "sqrt" && callback.name !== "pot") {
            return "This function required two numeric parameters, and you have passed only one";
        }
        return callback(num1);
        //return;
    }
    else {
        if (typeof num2 !== 'number') {
            return "Only numbers accepted";
        }
        return callback(num1, num2);
    }
}
;
//console.log(calc(add, 25, 10));
//console.log(calc(add, 25));
//console.log(calc(subt, 25, 5));
//console.log(calc(subt, 25, 10));
//console.log(calc(subt, 25, 10));
//console.log(calc(divd, 25, 10));
//console.log(calc(sqrt, 25));
console.log(calc(pot, 9));
