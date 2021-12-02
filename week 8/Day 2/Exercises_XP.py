class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def oldest(cat1, cat2, cat3):


        max([cat1, cat2, cat3], key=attrgetter('age'))


oldest(cat1, cat2, cat3)

#OR
class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def oldest(cat1, cat2, cat3):

        older_cat = cat1
        if cat2.age > older_cat.age:
            older_cat = cat2
        if cat3.age > older_cat.age:
            older_cat = cat3
        return older_cat

older_cat = oldest(cat1,cat2,cat3)
print(older_cat.name,older_cat.age)

cat1 = Cat('Pushok',3)
cat2 = Cat('Snezhok',4)
cat3 = Cat('Blacky',2)