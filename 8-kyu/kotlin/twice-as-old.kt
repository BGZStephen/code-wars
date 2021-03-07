fun getLowerBound(dadYearsOld: Int, sonYearsOld: Int): Int {
  var diff = 0
  var dadAge = dadYearsOld.toDouble()
  var sonAge = sonYearsOld.toDouble()

  while (sonAge > 0) {
    if ((dadAge / 2) == sonAge) return diff

    sonAge -= 1
    dadAge -= 1
    diff += 1
  }

  return 0
}

fun getUpperBound(dadYearsOld: Int, sonYearsOld: Int): Int {
  var diff = 0
  var dadAge = dadYearsOld.toDouble()
  var sonAge = sonYearsOld.toDouble()

  while (dadAge <= dadYearsOld * 2) {
    if ((dadAge / 2) == sonAge) return diff

    sonAge += 1
    dadAge += 1
    diff += 1
  }

  return 0
}

fun twiceAsOld(dadYearsOld: Int, sonYearsOld: Int): Int {
  if (dadYearsOld / 2 == sonYearsOld) return 0

  val upperBound =  getUpperBound(dadYearsOld, sonYearsOld)
  val lowerBound =  getLowerBound(dadYearsOld, sonYearsOld)

  return if (upperBound > 0) upperBound else lowerBound
}