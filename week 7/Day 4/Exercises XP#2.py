def get_age(day, month, year):
	current_year = 2021
	current_month = 11
	current_day = 18
	age = current_year - current_year
	if current_month < month:
		age -= 1
	elif current_month == month:
		if current_day < day:
			age -= 1

	return age 

def can_retire(gender, date_of_birth): #can_retire('m', '27/10/1982')
	# my_day, my_month, my_year = date_of_birth.split('/')
	num_date_list = list(map(lambda s: int(s), date_of_birth.split('/')))
	my_age = get_age(*num_date_list)
	get_age(date_of_birth)
	if gender == 'f' and my_age >= 62:
		return True
	elif gender == 'm' and my_age >=67:
		return True
	else:
		return False

def can_retire()
	print('You can retire')

filter(map(person, can_retire))
