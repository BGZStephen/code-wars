// Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

function reverse(n) {
  let res;

  while (n > 0) {
    if (!res) {
      res = n % 10;
    } else {
      res *= 10;
      res += n % 10;
    }

    n = parseInt(n / 10);
  }

  return res;
}
