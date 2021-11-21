# Daily Challenge Week 7 Day 4 Done

def zero_dev(*args):
	total = 0
	for num in args:
		try:
			total1 = num/total
		except ZeroDivisionError:
			total1 = num/1

	return total1
print()

#OR
	try: 
		5/0
		raise Warning('Dividing by 0 is not possible')
	except ZeroDivisionError:
		print('Dividing by Zero is not possible')