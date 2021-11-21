#1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

new_list = {}
for key,value in zip(keys,values):
	new_list.update({key:value})
print(new_list)


#2
family = {}
while True:
	name = input('what"s the party members name?if youre done type quit')
	if name == 'quit':
		break
	age = int(input(f'whats the {name}\'s age'))
	family[name] = age
	family.update({name:age})

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total =0
for name,age in family.items():
	if age<3:
		continue
	if 3<= age <= 12:
		total += 10
	if age >12:
		total +=15

print(f'the total for the family is {total}')

#3

brand = { 'name':'Zara','creation_date':1975,'creator_name':'Amancio Ortega Gaona', 'type_of_clothes': ['men', 'woman', 'children', 'home'], 'international_competitors': ['Gap', 'H&M', 'Benetton'], 'number_stores': 7000, 'major_color': {
	'France':'blue', 'Spain': 'red', 'US':['pink','green']
}}

brand['number_stores'] = 2

for i in range (0,3):
	print('The clients of ',brand['name'],' are ',brand['type_of_clothes'][i])

brand['country_creation']='Spain'


brand['international_competitors'].append('Desigual')

del brand['creation_date']
print(brand['international_competitors'][-1])
print(brand['major_color']['US'])

pairs = 0
for keys in brand:
	pairs +=1
print(pairs)

for keys in brand:
	print(keys)

more_on_zara = {'creation_date': 1975, 'number_stores':10000}

brand.update(more_on_zara)

print(brand['number_stores'])
print(brand)


users = [ "Mickey", "Minnie", "Donald","Ariel","Pluto"]
	


#4
#hint enumerate

disney_users_A = {}
for (index_count, character) in enumerate(users):

	disney_users_A.update({character:index_count})
print(disney_users_A)

disney_users_B = {}
for (index_count, character) in enumerate(users):
	disney_users_B.update({index_count:character})
print(disney_users_B)

users1 = sorted(users)
disney_users_C = {}
for (index_count, character) in enumerate(users1):
	disney_users_C.update({character:index_count})
print(disney_users_C)
users = [ "Mickey", "Minnie", "Donald","Ariel","Pluto"]
disney_users_A = {}
user1 =[]
for character1 in users:
	if "i" in character1:
		user1.append(character1)
		for (index_count, character) in enumerate(user1):
			disney_users_A.update({character:index_count})
	else:
		continue

print(disney_users_A)

disney_users_A = {}
user1 =[]
for character1 in users:
	if character1[0] == "M" or character1[0] == "P":
		user1.append(character1)
		for (index_count, character) in enumerate(user1):
			disney_users_A.update({character:index_count})
	else:
		continue

print(disney_users_A)
