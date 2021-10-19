let me = ["my", "favourite", "color", "is", "blue"]

console.log(me.join(' '))

let str1="Funky"
let str2="Bunny"
let str3=[str1.slice(0,3).concat(str2.slice(3)), str2.slice(0,3).concat(str1.slice(3))]

console.log(str3.join(' '))

num1=prompt("Enter the first number");
num2=prompt("Enter the second number");
sum=Number(num1)+Number(num2)
alert("The sum is " + sum);