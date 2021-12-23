import random

def get_words_from_file():
	with open('sowpods.txt', mode='r') as words:
		words_list = words.readlines()
	print(words_list)

get_words_from_file()


def get_random_sentence(length):
	length = input('Please give the number of words in the sentence')
	try:
	if length > 2 and length <20:
		for words_counter in range(0,length):
			sentence = typ
			num = randint(0,words_list.length)
			sentence.append(words_list[num])
			words_counter +=1


	except:
		print("Please give a number between 2 and 20")


