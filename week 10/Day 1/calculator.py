# 1st type
import operators

print(operators.addOperator(8,90))

print(operators.divideOperator(90,9))

#2nd type

from operators import addOperator, divideOperator

print(addOperator(5,8))
print(divideOperator(4,5))

#3rd type

from operators import divideOperator as divideOp, addOperator as addOperator

print(divideOp(6,3))
print(ad(5,6))