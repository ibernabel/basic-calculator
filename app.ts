const add = (num1: number = 0, num2: number = 0): number => num1 + num2;
const subt = (num1: number = 0, num2: number = 0): number => num1 - num2;
const mult = (num1: number = 1, num2: number = 1): number => num1 * num2;
const divd = (num1: number = 1, num2: number = 1): number | Error => (num2 !== 0) ? num1 / num2 : new Error("Can't divide by zero");
const pot = (num: number = 1, expot: number = 2): number => num ** expot;
//const pot2 = (num: number = 1): number => num * num;
const sqrt = (num: number = 1): number => Math.sqrt(num);

function calc(callback: any, num1?: number, num2?: number): number | string | Error {

	if (typeof num1 !== 'number' && typeof num1 !== 'undefined') {
		return new Error("Only numbers accepted.");
	}

	if (typeof num2 !== 'number' && typeof num2 !== 'undefined') { 
		return new Error("Only numbers accepted"); 
	}
	
	return callback(num1, num2);

};


console.log(calc(add,5));
console.log(calc(subt, 8));
console.log(calc(mult, 4));
console.log(calc(divd, 9));
console.log(calc(pot, 5, 3));
console.log(calc(sqrt, 81, 3));