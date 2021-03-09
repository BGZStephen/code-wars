package growth

fun nbYear(pp0:Int, percent:Double, aug:Int, p:Int):Int {
  val percentGrowth: Double = 1.00 + (percent / 100)
  var pop = pp0.toDouble()
  var yearCount = 0

  while (pop < p) {
    pop *= percentGrowth
    pop += aug
    yearCount += 1
  }

  return yearCount
}