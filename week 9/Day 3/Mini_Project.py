class Character:

	def __init__(self, name, life = 20, attack=10 ):
		self.life = life
		self.attack = attack
		self.name = name

	def basic_attack(self, other_character):
		other_character.life = other_character.life - self.attack
		return other_character

class Druid(Character):

	def greeting(self):
		print(f"I'm a greenpeace with life of {self.life} and attack of {self.attack}")

	def meditate(self):
		self.life += 10
		self.attack -= 2
		print(f"Now I've got more life {self.life} and less attack {self.attack} skills")

	def animal_help(self):
		self.attack += 5
		print (f"Now i've got more attack skills {self.attack}")

	def fight(self, other_character):
		other_character.life -= (0.75*self.life + 0.75*self.attack)
		print (f"i've weakened {other_character.name} and now he got {other_character.life}")
		# return other_character


class Warrior(Character):

	def greeting(self):
		print(f"I'm a badass with life of {self.life} and attack of {self.attack}")

	def brawl(self, other_character):
		other_character.life = int(other_character.life - 2*self.attack)
		self.life += 0.5*other_character.attack
		print (f"I've got more life of {self.life} and shortened {other_character.name}'s life to {other_character.life}")

	def train(self):
		self.attack += 2
		self.life += 2
		print (f"I've improved attack to {self.attack} and life to {self.life}")

	def roar(self, other_character):
		other_character.attack -= 3
		print (f"I've weakened the {other_character.name}'s attack to {other_character.attack}")

class Mage(Character):

	def greeting(self):
		print (f"I'm a cursing badass with life of {self.life} and attack of {self.attack}")

	def curse(self, other_character):
		other_character.attack -= 3
		print (f"I've cursed {other_character.name} and now his attack is {other_character.attack}")

	def summon(self):
		self.attack += 3
		print (f"I've summon my attack to {self.attack}")

	def cast_spell(self, other_character):
		other_character.life -= self.attack//self.life
		print (f"I've spelled the {other_character.name}'s life to {other_character.life}")

buddy = Druid("Buddy")
conan = Warrior("Conan")
sauron = Mage("Sauron")

buddy.greeting()
buddy.meditate()
buddy.animal_help()
buddy.fight(sauron)

conan.greeting()
conan.brawl(sauron)
conan.train()
conan.roar(sauron)

sauron.greeting()
sauron.curse(conan)
sauron.summon()
sauron.cast_spell(conan)



