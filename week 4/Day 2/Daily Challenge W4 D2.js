function wordsInStars() {

let sentence = prompt("Say whatever you want")
let words =[]
let k=0

	for (i=0; i<=sentence.length+1; i++){

		if(sentence.charAt(i) == " " && i<sentence.length) {
			
			words.push(sentence.slice(k,i));
			k=i+1

			}
		else {
				continue
			}
	}
words.push(sentence.slice(k,sentence.length));

	let maxlen=0 



	for (j=0; j<words.length; j++) {

		var word = words[j]

		if(word.length > maxlen) {
			maxlen = word.length
		}
		else {continue}
	}
let star = "*"
	console.log(star+star.repeat(maxlen)+star)
	
	for (k=0; k<words.length; k++){
	var wordk = words[k]
	
	console.log(star+wordk+" ".repeat(maxlen-(wordk.length))+star);
	}
	console.log(star+star.repeat(maxlen)+star)
	
}

wordsInStars()
