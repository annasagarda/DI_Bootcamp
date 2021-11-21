# Exercise XP Gold #2 Done
import random

def throw_dice():
	
	dice = random.randint(1,7)
	return dice


def throw_until_doubles():
	counter = 0 
	dice1 = throw_dice()
	dice2 = throw_dice()
	while dice1 != dice2:
		counter += 1
		dice1 = throw_dice()
		dice2 = throw_dice()
	return counter
res = throw_until_doubles()
print(res)
