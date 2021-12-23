//Exercise 1//

let Language = prompt("Which language do you speak")

let language = Language.toLowerCase()

switch (language) {
	case "russian" : alert("Добрый день");
	break;
	case "english" : alert("Hello");
	break;
	case "german" : alert("Guten Tag");
	break;
	case "french" : alert("Bonjour");
	break;
	case "hebrew" : alert("Shalom");
	break;
	default:
	alert("01110011 01101111 01110010 01110010 01111001");
}

//Exercise 2//

let grade = prompt("What is your grade")

if (grade >90) {
	alert("A")}
else if (grade >80 &&  grade<=90) {alert("B")}

else if (grade >=70 &&  grade<=80) {alert("C")}

else if (grade <70) { alert("D")}

//Exercise 3//

let sport = prompt("What do you do for the sport activity on weekends?")

if (sport.length>=3 && sport.slice(sport.length-3,sport.length)!="ing") 
	{alert(sport+sport.slice(sport.length-1)+"ing")}
	else if ((sport.length)>=3 && sport.slice(sport.length-3, sport.length)=="ing")
		{alert(sport+"ly")}
	else if (sport.lenth<3) {alert(sport)}