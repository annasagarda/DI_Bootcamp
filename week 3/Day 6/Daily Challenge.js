const numbers = [5,0,9,1,7,4,2,6,3,8];

orderedNumbers=[]

for (i = 0; i< numbers.length; i++) {
	console.log(i);
	
	for (k = 0; k < numbers.length; k++) {
		if (numbers[k] == i) {
		orderedNumbers.push(numbers[k])
			}
		else {}
	}
}

