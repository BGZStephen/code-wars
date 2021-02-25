object GrassHopper {
  fun summation(n:Int):Int {
    (1..n).toList().reduce {a, b -> a + b} 
  }
}