# Given an array of integers your solution should find the smallest integer.

def fizz_buzz():
  for n in range(100):
    if (n % 5 == 0 and n % 3 == 0): 
      print("fizz buzz")
    elif (n % 5 == 0): 
      print ("buzz")
    elif (n % 3 == 0): 
      print ("fizz")
    else: 
      print(n)

fizz_buzz()