#include <vector>
#include <cstdint>
#include <math.h>

std::vector<uint64_t> powers_of_two(int n) {
  std::vector<uint64_t> res = {1};

  for (int i = 1; i <= n; i++) {
    res.push_back(pow(2, i));
  }

  return res;
}

int main() {
  if (powers_of_two(1) != std::vector<uint64_t>{1}) {
    return 1;
  }

  if (powers_of_two(3) != std::vector<uint64_t>{1, 2, 4}) {
    return 1;
  }

  if (powers_of_two(10) != std::vector<uint64_t>{1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024}) {
    return 1;
  }

  return 0;
}