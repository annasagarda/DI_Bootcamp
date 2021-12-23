let addressNumber = 30;
let addressStreet = "Mendele";
let country = "Israel";

let globalAddress = "I live in "+addressStreet+" "+addressNumber+", "+country;
console.log(globalAddress);

//Exercise 3://

let pets = ["cat","dog","fish","rabbit","cow"];

let onePet = pets.slice(1,2);

console.log(onePet)

pets.splice(5,1,"horse") // adds "horse" at the end
console.log(pets)

pets.splice(3,1) //removes the element Rabbit
console.log(pets)

pets.length

let isBoss = confirm("Are you the boss?"); //shows the alert "Are you the boss"
alert(isBoss); // true if OK is pressed


