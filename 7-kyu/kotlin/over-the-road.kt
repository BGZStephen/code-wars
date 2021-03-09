fun overTheRoad(address: Int, n: Int): Int {
  val left = (1..(n * 2)).toList().filter {value -> value % 2 != 0}
  val right = left.map {value -> value + 1}.reversed()

  return if (address % 2 == 0) {
    left[right.indexOf(address)]
  } else {
    right[left.indexOf(address)]
  }
}