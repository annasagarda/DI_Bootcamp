class AnagramChecker:

	def __init__(self):
		with open("file_for_exercise.txt", mode = 'r') as f:
			self.words = list(map(lambda s:s.strip(), f.readlines()))

	def is_valid_word(self,word1):
		return word1.upper() in self.words #will return True or False

	def is_anagram(self, word2):
		sorted_word = sorted(word2.upper())
		return list(filter(lambda x:sorted(x) == sorted_word, self.words))


	def validte_word(word1)
	if word1.isalpha() and len(word1.split()) == 1:
		return word1.strip()
	else:
		return None