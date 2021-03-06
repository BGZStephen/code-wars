fun sum(numbers: IntArray): Int {
  val positives = numbers.filter {number -> number > 0}

  return if (positives.isNotEmpty()) {
    positives.reduce {a, b -> a + b}
  } else {
    0
  }
}