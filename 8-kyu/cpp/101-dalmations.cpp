using namespace std;
#include <string>
#include <iostream>

// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

// Good luck!

std::string dalmations(int number) {
  std::string dogs [] = {"Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"};

  if (number <= 10) {
    return dogs[0];
  }

  if (number <= 50) {
    return dogs[1];
  }

  if (number == 101) {
    return dogs[3];
  }

  return dogs[2];
}

int main() {
  if (dalmations(10) != "Hardly any") {
    return 1;
  }

  if (dalmations(50) != "More than a handful!") {
    return 1;
  }

  if (dalmations(101) != "101 DALMATIANS!!!") {
    return 1;
  }

  if (dalmations(102) != "Woah that's a lot of dogs!") {
    return 1;
  }

  return 0;
}