

let sentence = prompt("type the sentece") ;// The soup was not that bad at all";

let wordNot = sentence.indexOf("not");

let wordBad = sentence.indexOf("bad");

if (wordNot < wordBad) { sentence = sentence.substring(0,wordNot) + 
	"good" + sentence.substring(wordBad+3, sentence.length+1);
console.log(sentence)

} else {(console.log(sentence))}

