import json

with open("file.json",'r') as f:
	family = json.load(f)
	childrens = family['children']
	print(family)

	for child in childrens:
		print(f'{child}['firstName'] - {child}['age']')

	for i in range(len(childrens)):
		childrens[i]["favourite_color"] = "red"

	print(childrens)

with open("file.json",'w') as f:
	json.dump(childrens,f, indent = 2)