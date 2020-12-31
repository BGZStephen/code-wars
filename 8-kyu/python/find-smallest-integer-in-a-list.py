# Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder:
  def findSmallestInt(self, args):
    res = args[0]
    for value in args:
      if (value < res):
        res = value
    return res

smallIntFinder = SmallestIntegerFinder();
print(smallIntFinder.findSmallestInt([1, 2, 3, 4, 5, 6, 7]))
print(smallIntFinder.findSmallestInt([7, 1, 5, 2, 8, 9]))