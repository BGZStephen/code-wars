// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

fn odd_count(n: u64) -> u64 {
  let mut res: u64 = 0;
  let mut iterator: u64 = 1;
  
  while iterator < n {
    res += 1;
    iterator += 2;
  }
  
  return res;
}