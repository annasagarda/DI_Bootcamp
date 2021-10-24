Exercise 1//


colors = ["yellow", "green", "greenblue", "red", "white", "darkgrey"];



for (index=1; index<=colors.length; index++) {
		
	console.log("My #"+index+" choice is "+colors[index-1]);
}
Bonus//

colors = ["yellow", "green", "greenblue", "red", "white", "darkgrey"];


suffix = ["st","nd", "rd", "th"]

for (index=1; index <= colors.length; index++) {

	if(index == 1){
		
	console.log("My "+index+suffix[0]+" choice is "+colors[index-1])
	}	else if (index == 2){
		console.log("My "+index+suffix[1]+" choice is "+colors[index-1]);
	}
	

	else if (index == 3){
		console.log("My "+index+suffix[2]+" choice is "+colors[index-1]);
	}
	
	else { 
		console.log("My "+index+suffix[3]+" choice is "+colors[index-1]) 
	}
		

}

Exercise 2//

let people = ["Greg", "Mary", "Devon", "James"]
people.shift()

people[people.length-1]="Jason"

people.push("Anna")

// for (i=0; i<= people.length-1; i++){
// 	console.log(people[i])
// }

for (i=0; i<= 5; i++){

	console.log(people[i]);

	if (people[i] == "Jason") {
		break
	}
	else {
		continue;
	}
}

newPeople = people.slice(1,3)

console.log(people.indexOf("Mary"))

console.log(people.indexOf("Foo"))

let last=people.length-1

Exercise 3//

let n

do {
	n=parseInt(prompt("Give me the Number"))
}
while (n<10)

Exercise 4//


let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}


console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.firstFloor,building.numberOfAptByFloor.thirdFloor)
console.log(building.numberOfRoomsAndRent.dan[0])

if (building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]>building.numberOfRoomsAndRent.dan[1]) {
		building.numberOfRoomsAndRent.dan[1]=1200
}
console.log (building.numberOfRoomsAndRent.dan[1])


Exercise 5//

let family = {
	father: "Alex",
	mother: "Lulu",
	cousin: "Helga"
}

for (var key in family) {
	console.log(key)
}

for (var key in family){
	console.log(family[key])
}

Exercise 6//

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

console.log(Object.keys(details)[0]+" "+Object.values(details)[0]+" "+
	Object.keys(details)[1]+" "+Object.values(details)[1]+" "+
	Object.keys(details)[2]+" "+Object.values(details)[2])

Exercise 7//

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]


names.sort()

let name=""

for (i=0; i<names.length; i++) {
	
	name+=names[i].charAt(0)
}

console.log(name)
