// // Exercise 1//
// Part I

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.


// Part II

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")


// Part III

// Add a parameter personHobbies to the function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies).
// The function should
// console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// console.log the person’s hobbies one by one (ie. loop through the array of hobbies).
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

// function infoAboutMe() {
// 	console.log("My Name is Anna and i'm 33 years old with fun different hobbies.")

// }

// infoAboutMe()

// function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies){
// 	console.log("Your name is "+personName+", your are "+personAge+
// 		" ,your favorite color is "+personFavoriteColor)
// 	console.log("Your Hobbies are:")
// 	for (i=0; i<personHobbies.length;i++) {
// 	console.log(personHobbies[i])
// 	}
// }

// infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])


// Exercise 2 : Keyless Car

// Instructions

// Ask the user for their age, and save the value to a variable.
// Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
// if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
// if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
// Call the function.
// Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept a parameter age.


// // var a = prompt("What is your age?")

// function checkDriverAge(age) {
// 	var age = prompt("What is your age?")
// 	if (age<18){
// 		alert("Sorry, you are too young to drive this car. Powering off.");
// 	}
// 	else if (age==18){
// 		alert("Congratulations on your first year of driving. Enjoy the ride!")
// 	}
// 	else if(age>18) {
// 		alert("You are old enough to drive, Powering On. Enjoy the ride!")
// 	}
// }

// checkDriverAge()

// // Exercise 3 //
// Exercise 3: Odd Or Even

// Instructions

// Create a function called checkNumber() that takes no parameter.
// In the function, loop through numbers 0 to 100.
// Add an if/else block
// If the number is even, console.log "the number <number> is even"
// Else, console.log "the number <number> is odd"
// Call the function

// function checkNumber() {
// 	for (i=0; i<=100; i++) {
// 		if (i%2 == 0) {
// 			console.log("The number "+i+" is even")
// 		}
// 		else {
// 			console.log("The number "+i+" is odd")
// 		}
// 	}
// }

// checkNumber()

// Exercise 4 //
// Exercise 4 : Tips

// Instructions

// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.



// Ask John for the amount of the bill.
// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill (bill + tip).
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)


// function tippCalculator () {
// 	var billAmount = prompt("John, what is the amount for the bill?")

// 	if(billAmount <= 50) {
// 		alert("Your tip amount is "+billAmount*0.2+
// 			"\n"+"Your final bill amount is "+billAmount*1.2)
// 	}
// 	else if (billAmount < 200 && billAmount >50){
// 		alert("Your tip amount is "+billAmount*0.15+
// 			"\n"+"Your final bill amount is "+billAmount*1.15)
// 	}
// 	else if (billAmount >=200) {
// 		alert("Your tip amount is "+billAmount*0.1+
// 			"\n"+"Your final bill amount is "+billAmount*1.1)
// 	}
// }

// tippCalculator()

// Exercise 5 //
// Exercise 5 : Find The Numbers Divisible By 23

// Instructions

// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum

// function isDivisible() {
		
// 		let sum = 0;
// 	for (i=0; i<=500; i++) {
// 		if (i%23 == 0) {
// 			console.log(i)
// 			sum += i;
// 		}
// 		else {continue
// 		}
// 	}
// 	console.log(sum)
// }
// isDivisible()

// function isDivisible(divisor) {
		
// 		let sum = 0;
// 		let all = [];
// 	for (i=0; i<=500; i++) {
// 		if (i%divisor == 0) {
// 			console.log(i);
// 			all.push(i);
// 			sum += i;
// 		}
// 		else {continue
// 		}
// 	}
// 	console.log("All the numbers, divisible by "+divisor+" and their sum "+sum)
// }
// isDivisible(3)

//Exercise 6 //
// Exercise 6 : Amazon Shopping

// Instructions

// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
// Create a function called checkBasket(). 
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional

// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }

// function checkBasket() {
// 	item = prompt("Name the wished item")

// 	if(item in amazonBasket == true) {
// 		alert("This item is already in the basket")
// 	}
// 	else {
// 		alert("Do you want to see the similar items?")
// 	}
// }

// checkBasket()

// Exercise 7 

// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters. 

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1
//

// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

//  let shoppingList = ["banana", "orange", "apple"];
//  let bill = 0

//  function myBill() {

//  	for (i=0; i<= shoppingList.length; i++){

//  		product = shoppingList[i]
//  		if( product in stock == true && stock[product] >0 ) {
 			
//  			bill += prices[product];
//  			stock[product] -= 1;
 			
//  		}
//  		else { continue }
//  	}
//  	alert("Your bill is "+bill)

//  }

//  myBill()

//  Exercise 8 : What’s In My Wallet ?

// Instructions

// Create a function named changeEnough that receives two arguments : an item price and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price, it means that you can afford the item, therefore the function should return true
// If the sum of the change is smaller than the item’s price, it means that you cannot afford the item, therefore the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// 1 nickel is 0.05
// A penny is 0.01


// To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true

// function changeEnough(itemPrice,[q,d,n,p]) {


// 	let amountOfChange = q*0.25+d*0.10+n*0.05+
// 	p*0.01


// 	if(amountOfChange>=itemPrice) {
// 		console.log("true")
// 		return true
// 	}
// 	else {
// 		console.log("false")
// 		return false
// 	}
// }

// changeEnough(4.25, [25, 20, 5, 0])
// changeEnough(14.11, [2,100,0,0])
// changeEnough(0.75, [0,0,20,5])


// Exercise 9 : Vacations Costs

// Instructions

// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
// Define a function called planeRideCost().
// It should ask the user for their destination.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
// If the user doesn’t answer or if the answer is not a string, ask again.
// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z. 
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost.
// Call the function totalVacationCost()
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function.

function hotelCost () {
	let night;
	nights = prompt("How many nights do you want to stay in the hotel?")
	console.log(nights)
	if (nights === false || night === NaN) {
		nights = prompt("How many nights do you want to stay in the hotel?(Please give a number")
	}
	else { return nights*140+"$"
	}

}

function planeRideCost() {
	
	destination = prompt("What's your destination?")

	if (typeof destination !== 'string' || destination == false) {
		destination = prompt("What's your destination?(in words)")
	}
	// 
	else { prompt ("the value is not a string")}
}

function rentalCarCost() {
	let numberOfDays;
	numberOfDays = prompt("How many days would you like to rent a car?")
	if (numberOfDays === false || numberOfDays === NaN) {
		nights = prompt("How many days would you like to rent a car?(Please give a number")
	}
	else {
		if(numberOfDays >= 10) {
			price = numberOfDays*40*0.95
		}
		else {
			price = numberOfDays*40
		}
		return price+"$"
	}
}

function totalVacationCost() {

	alert("The car cost:"+rentalCarCost()+" The hotel cost "+hotelCost()
		+" The plane cost "+planeRideCost())
	
}

totalVacationCost()

