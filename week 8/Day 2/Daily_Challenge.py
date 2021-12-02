class Farm:

	def _init_(self, farm_name):
		self.farm_name = farm_name
		self.animals= {}

	def add_animal(self, animal_type, number_animals=1):
		if animal_type in self.animals:
			self.animals[animal_type]=self.animals[animal_type] + number_animals		self.animals[animal_type]=number_animals
		else 
			self.animals[animal_type]=number_animals

	def get_info(self):
		print(f"{farm_name}'s farm:")

		for animal_name, number_animals in self.animals.items():
			print(f"{animal_name} : {number_animals}")

		return '\n\tE-I-E-I-O!'

#animal['sheep'] = 1

macdonald = Farm("McDonald") #'macdonald' is the variable
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())