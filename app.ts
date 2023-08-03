const add = (num1:number, num2:number):number => num1 + num2;
const subt = (num1:number, num2:number):number  => num1 - num2;
const mult = (num1:number, num2:number):number  => num1 * num2;
const div = (num1:number, num2:number):number | string => (num2 !== 0) ? num1 / num2 : "Can't divide by zero"; 
const pot = (num1:number, num2?:number):number => num1 * num1;

const sqrt = (num1:number, num2?:number):number => Math.sqrt( num1 );

function calc(callback:any, num1:number, num2?:number) {
	typeof num1 !== 'number' ? "Only numbers are accepted." : "";
	if(num2) {
		typeof num2 !== 'number' ? "Only numbers are accepted." : "";
	} 

    return callback(num1, num2);
};
/*
console.log(sqrt(25));
console.log(div(25, 0));
console.log(div(25, 10));
console.log(add(25, 10));
console.log(subt(25, 10));
*/
//console.log(calc(add, 25, 10));
console.log(calc(add, 25));
//console.log(calc(subt, 25, 10));
//console.log(calc(div, 25, 10));
//console.log(calc(sqrt, 25)); // error