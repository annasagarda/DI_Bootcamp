
//Method 1//

stars = ["*","* *", "* * *", "* * * *", "* * * * *", "* * * * * *"]
for (i = 0; i < 6; i++) {
	console.log(stars[i]);
}

//Method 2//

for (k = 1; k <= 6; k++) {
	console.log(star.repeat(k));
}

//Method 3 //

Stars =[]

let k='*'
for (j = 0; j<1; j++) {

	
	Stars[j]=k;

	for (i=1; i<5; i++) {
		k = k + "*";
	Stars.push(k); }
	console.log(Stars);
	
}

