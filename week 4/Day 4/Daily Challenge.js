function beersOnTheWall() {

var start= prompt("Give the number to start with")

for (i=1; i>start-i; i++) {
	let single = "string"
	if( i===1) { single = "it"
	}

	else {single = "them"}
	console.log(start + " bottles of beer on the wall\\n"
			+start+" bottles of beer\\n"+
			"take "+start+" down, pass "+single+
			" around\\n"+
			start-i+" bottles of beers on the wall")
	}
	console.log("Only"+start-i+" bottles of beer on the wall\\n"
			+start+" bottles of beer\\n"+
			"take "+start+" down, pass "+single+
			" around\\n"+"there are no bottles of beer on the wall")

}

beersOnTheWall()
