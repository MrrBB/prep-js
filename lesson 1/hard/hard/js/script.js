let num =  33721;

let num2 = eval(num.toString().split('').join('*'));


let num3 = Math.pow(num2, 3),
	split = eval(num3.toString().split('', 2));
	alert(split);
	