text = input("enter your text here")

shifter = int(input("input the shifter"))


cypher_text = str()


for letter in text:
	if letter == ' ':
		cypher_text += ' '
	else:
		cypher_text += str(chr(ord(letter) + shifter))
	

print(cypher_text)