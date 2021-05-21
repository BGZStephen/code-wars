using namespace std;
#include <iostream>

int quarter_of(int month){
  return ((month - 1) / 3) + 1;
}

int main() {
  if (quarter_of(1) != 1) {
    return 1;
  }

  if (quarter_of(3) != 1) {
    return 1;
  }

  if (quarter_of(4) != 2) {
    return 1;
  }
  
  return 0;
}