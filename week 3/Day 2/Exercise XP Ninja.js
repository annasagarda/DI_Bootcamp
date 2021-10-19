// let me = ["my", "favourite", "color", "is", "blue"]

// console.log(me.join(' '))

// let str1="Funky"
// let str2="Bunny"
// let str3=[str1.slice(0,3).concat(str2.slice(3)), str2.slice(0,3).concat(str1.slice(3))]

// console.log(str3.join(' '))

// num1=prompt("Enter the first number");
// num2=prompt("Enter the second number");
// sum=Number(num1)+Number(num2)
// alert("The sum is " + sum);
//Exercise 1//

// let sen= prompt("Write a sentence containing the word 'Nemo' ")

// if (sen.indexOf("Nemo")==-1) 
// 	{console.log("I can't find Nemo")}
// else {console.log("I found Nemo at " + sen.indexOf("Nemo"))
// }

//Exercise 3//

// let sum = prompt("Write two numbers as a string, separated by commas")
// let sep = sum.indexOf(",")
// a=Number(sum.slice(0,sep));
// b=Number(sum.slice(sep+1));

// console.log(Number(sum.slice(0,sep))+Number(sum.slice(sep+1)))

//Exercise 4//

word=["Boom"]

let num=prompt("Enter a number")

if (num<2) {
	console.log(word);
} 
else if (num>2) {
	console.log("5o");
} else if(num%2==0) {
	console.log(word.push("!"));
} else if(num%5==0) {
	console.log(word.toUpperCase());
} else if(num%5==0 && num%2==0) {console.log(word.toUpperCase().push("!"))
}