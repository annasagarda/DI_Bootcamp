
word="Boom"

let num=prompt("Enter a number")

const letter = 'o';

if (num<2) {
	console.log(word);
} 
else if (num>2) {
	console.log(`B${letter.repeat(num)}m`);
} 
else if(num%5==0 && num%2==0) {console.log(word.toUpperCase().concat("!"))
}
else if(num%2==0) {
	word = `B${letter.repeat(num)}m`;
	console.log(word.concat("!"));
} else if(num%5==0) {
	console.log(word.toUpperCase());
} 