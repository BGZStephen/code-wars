package reducebutgrow

fun grow(arr: IntArray): Int {
  return arr.reduce {a, b -> a * b}
}