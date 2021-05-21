#include <vector>

std::vector<int> divisible_by(std::vector<int> numbers, int divisor) {
  std::vector<int> res;

  int arr_size = numbers.size();

  for (int i = 0; i < arr_size; i++) {
    if (numbers[i] % divisor == 0) {
      res.push_back(numbers[i]);
    }
  }

  return res;
}