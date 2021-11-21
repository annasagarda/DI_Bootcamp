str=input('give me some text')
txt_length = len(str)
if txt_length<10:
	print('string not too long')
elif txt_lenght>10:
	print('string too long')

print(str[0])
print(str[-1])

print(''.join([x[0] for x in str.split()]))

current_number = 1
while current_number <= 10:
	print (current_number)
	current_number +=1

print("finished")

print('hello world\n'*4)


