// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

fn repeat_str(src: &str, count: usize) -> String {
  let mut res = String::new();
    
  for _ in 0..count {
    res.push_str(src);
  }
    
  return res;
}

fn main () {
  print!("{}", repeat_str("boop", 10));
}