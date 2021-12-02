import random
class Game:
    GAME_LIST = {
                "r":"s",
                "p":"r",
                "s":"p",
            }
    def get_user_item(self):
        while True:
            input_User = input("Please pick a Weapon \n(r)ock, \n(p)aper \n(s)cissors\n").lower()
            if input_User in Game.GAME_LIST.keys():
               return input_User
            elif input_User == "exit":
                return input_User
            else:
                print("please enter a r p s")
    def get_computer_item(self):
        return random.choice(["r","p","s"])
    def run(self):
        while True:
            user_input = self.get_user_item()
            if user_input == "exit":
                break
            computer_input = self.get_computer_item()  
            if user_input == computer_input:
                print("TIE!!!")
            elif Game.GAME_LIST[computer_input] == user_input:
                print("You lose!!!!")
            else:
                print("YOU WON!!!!")  
player1 = Game()
player1.run()