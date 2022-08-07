const add = (num1, num2) => num1 + num2;
const subt = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => {
   return (num2 !== 0) ? num1 / num2 : "Can't divide by zero";
}
const sqrt = (num) => Math.sqrt( num );

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

// console.log(sqrt(25));
// console.log(div(25, 0));
// console.log(div(25, 10));
// console.log(add(25, 10));
// console.log(subt(25, 10));
// console.log( calc(25, 10, add ) );
// console.log( calc(25, 10, subt ) );
// console.log( calc(25, 10, div ) );
console.log( calc(25, sqrt ) ); // error




