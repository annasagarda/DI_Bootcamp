# IS_A => inheritance
# HAS_A => Composition

class Human:
	pass

class Teacher(Human):
	pass

class School:
	teacher = Teacher()

class Door:
	def __init__(self, is_opened=False):
		self.is_opened = is_opened

	def open_door(self):
		self.is_opened = True

	def close_door(self):
		self.is_opened = False

class BlockedDoor(Door):

	def open_door(self):
		raise Exception('blocked door cannot be opened or closed')

	def close_door(self):
		raise Exception('blocked door cannot be opened or closed')

# door = Door()
# print(door.is_opened)
#
# door.open_door()
# print(door.is_opened)
#
# door.close_door()
# print(door.is_opened)

blocked_door = BlockedDoor()
# blocked_door.open_door()
blocked_door.close_door()	