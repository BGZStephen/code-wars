# Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

def is_divisible(n,x,y):
    if (n % y == 0 and n % x == 0):
      return True;
    else:
      return False

print(is_divisible(3,3,4))
print(is_divisible(12,3,4))
print(is_divisible(8,3,4))
print(is_divisible(48,3,4))