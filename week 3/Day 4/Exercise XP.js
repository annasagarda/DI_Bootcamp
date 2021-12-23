//Exercise 1//

let x = parseInt(prompt("type the x value"));
let y = parseInt(prompt("type the y value"));

if (x>y) {alert("x is the biggest number")}
else { alert("try again")}

// //Exercise 2//

let newDog = prompt("type in your favourite dog breed") //"Chihuahua"

console.log(newDog.length);

console.log(newDog.toUpperCase());

console.log(newDog.toLowerCase());

if (newDog.toLowerCase() === "chihuahua") {alert ("I love Chihuahuas, it’s my favorite dog breed")}
 else {alert("I don't care, I prefer rabbits")};

// //Exercise 3//

let x = prompt("Give me a natural number");
var num1 = parseInt(x);
function isNaturalNumber (str) {
    var pattern = /^(0|([1-9]\d*))$/;
    return pattern.test(str);
}

if (isNaturalNumber(x) && num1%2 === 0 && num1!==0) {alert("x is an even number")}
	else  if (isNaturalNumber(x) && num1%2 !==0 && num1 !==0) {alert("x is an odd number")}
		else {alert ("This number isn't natural")}


//Exercise 4//

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

users=["Lea123", "Princess45","Lea123", "Princess45", "cat&doglovers", "helooo@000"]



if (users.length === 0) {alert ("no one is online")}

	else if(users.length === 1) {alert (users[0]+" is online")}
		else if (users.length === 2) {alert (users[0]+ " and " + users[1] 
			+ "are online")}
			else if (users.length >2) {alert (users[0] + "," + users[1] + " and " +
				(users.length-2) + " more users are online")}