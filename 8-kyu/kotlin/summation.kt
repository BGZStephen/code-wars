object GrassHopper {
  fun summation(n:Int):Int {
    return (1..n).toList().reduce {a, b -> a + b} 
  }
}