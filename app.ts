const add = (num1: number, num2: number): number => num1 + num2;
const subt = (num1: number, num2: number): number => num1 - num2;
const mult = (num1: number, num2: number): number => num1 * num2;
const divd = (num1: number, num2: number): number | Error => (num2 !== 0) ? num1 / num2 : new Error("Can't divide by zero");
const pot = (num: number, expot: number): number => num ** expot;
const pot2 = (num: number): number => num * num;
const sqrt = (num: number): number => Math.sqrt(num);

function calc(callback: any, num1: number, num2?: number): number | string | Error {

	//console.log(num1);
	if (typeof num1 == "undefined" || num1 === null) {
		return new Error("The first parameter is missing");
	}
	if (typeof num1 !== 'number') {
		return new Error("Only numbers accepted.");
	}
	if (num2 === undefined || num2 === null) {
		console.log(callback.name)
		if (callback.name !== "sqrt" && callback.name !== "pot2") {
			return new Error("This function required two numeric parameters, and you have passed only one");
		}
		return callback(num1);
		//return;
	}
	else {
		if (typeof num2 !== 'number') { 
			return new Error("Only numbers accepted"); 
		}
		return callback(num1, num2);
	}
};

//console.log(calc(add, 25, 10));
//console.log(calc(add, 25));
//console.log(calc(subt, 25, 5));
//console.log(calc(subt, 25, 10));
//console.log(calc(subt, 25, 10));
console.log(calc(divd, 25, 0));
//console.log(calc(sqrt, 25));
//console.log(calc(pot, 9));