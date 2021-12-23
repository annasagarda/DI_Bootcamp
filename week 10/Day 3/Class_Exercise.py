# f = open('nameslist.txt')
#
# line = f.readline()
#
# while line:
# 	print(line)
# 	line = f.readline()

with open('nameslist.txt', 'r+') as f:
	lines = f.readlines()

	for i in range(len(lines)):
		lines[i] = lines[i].split('\n')[0]
	#
	# print(lines)
	#
	# print("the fifth line is: ", lines[4]) # get the fifth line

	# for i in range(5):
	# 	print(f.read(1)) # f at position 1

	count_darth = 0
	count_luke = 0
	count_lea = 0

	for name in lines:
		if name == "Darth":
			count_darth += 1
		if name == "Lea":
			count_lea += 1

	for i in range(len(lines)):
		if lines[i] == "SkyWalker":
			lines[i] += " Luke"

	print(lines)