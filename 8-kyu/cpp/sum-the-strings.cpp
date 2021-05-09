using namespace std;
#include <string>

std::string sum_str(std::string a, std::string b) {
  if (a.length() == 0) {
    a = "0";
  }
    
  if (b.length() == 0) {
    b = "0";
  }
    
  return to_string(std::stoi(a) + std::stoi(b));
}
