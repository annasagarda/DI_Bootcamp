

//Exercise 1

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"]

fruits.shift()
fruits.sort()
fruits.push("Kiwi")
fruits.splice(0,1)
fruits.reverse()

//Exercise 2

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let a = moreFruits[1][1]
console.log(a)