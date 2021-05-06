using namespace std;
#include <string>
#include <iostream>

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

std::string banjo(std::string name) {
  if (name[0] == 'R' || name[0] == 'r') {
    std::string response = name + " plays banjo";
    
    return response;
  }

  return name + " does not play banjo";
}

int main () {
  if (banjo("Robin") != "Robin plays banjo") {
    return 1;
  }

  if (banjo("robin") != "robin plays banjo") {
    return 1;
  }

  if (banjo("charlie") != "charlie does not play banjo") {
    return 1;
  }

  return 0;
}