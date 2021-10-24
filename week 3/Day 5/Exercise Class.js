//Exercise 1//

for (index=0; index<=15; index++) {
		console.log(index)
	if (index%2==1) {

		console.log(index +"index is even")}
		else (index%2 ==0) {
			console.log(index + "is odd")
		}
}


// just a code from class //

let person = {
	name: "dan"
	age: 31;
	height:177
}

for (const key in person){
	console.log(key)
	let element = person[key]; //calling the key
	console.log(element) //calling the object under this key
	//break // or
	if(key =="age") {
		break
	}
}

//

let array = ["joe", "clara","maria"]

for (let whateveryouwant in array) {
	console.log(whateveryouwant)
	console.log(array[whateveryouwant])
}

// Exercise 2.1//

let names= ["john", "sarah", 23, "Rudolf",34]

for (let i=0; i<names.length, i++ {
	let element = names[i];
	if (typeof element !== "string") {
		continue;
	}
	if( element[0] != element[0.toUpperCase()){
		element.charAt(0).toUpperCase() + element.slice(1)
	}
	console.log(element)
}

//Exercise 2.2

for (let i=0; i<names.length, i++ {
	let element = names[i];
	if (typeof element !== "string") {
		break;
	}
	
	console.log(element)
}