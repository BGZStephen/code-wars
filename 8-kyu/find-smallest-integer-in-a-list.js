// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let res = args[0]
    for (const int of args) {
      if (res > int) {
        res = int
      }
    }

    return res;
  }
}
