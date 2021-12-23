#The datetime Module

# from datetime import datetime
# today_date = datetime.today()

# my_birthday = "29/04/2022"

# my_birthday_date = datetime.strptime(my_birthday, "%d/%m/%Y")
# countdown = my_birthday_date - today_date

# print(f"my birthday is in {countdown}")


#The os Module

import os

dirs = ["week1", "week2", "week3", "week4", "week5"]

parent_dir = "D:"
for dirn in dirs:
	path = os.path.join(parent_dir, dirn)
	os.mkdir(path)
	print("Directory '% s' ")



