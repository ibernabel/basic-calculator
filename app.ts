const add = (num1:number, num2:number):number => num1 + num2;
const subt = (num1:number, num2:number):number  => num1 - num2;
const mult = (num1:number, num2:number):number  => num1 * num2;
const div = (num1:number, num2:number):number | string => (num2 !== 0) ? num1 / num2 : "Can't divide by zero"; 
const pot = (num:number):number => num * num;
const sqrt = (num:number):number => Math.sqrt( num );

function calc(callback:any, num1:number, num2?:number):number | string {
	console.log(callback)
	if( !num1 ){ return "Missed first Param" }
	if( typeof num1 !== 'number') {  return "Only numbers are accepted." }
	if(num2){
		if( typeof num2 !== 'number') {  return "Only numbers are accepted." }
		return callback(num1, num2)
	} else { return callback(num1) }
};
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