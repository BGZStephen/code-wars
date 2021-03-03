fun oddCount(n: Int): Int {
  return if (n % 2 != 0) {
      (n - 1).div(2)
  } else {
      n.div(2)
  }
}