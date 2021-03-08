package solution

fun calculateYears(years: Int): Array<Int> {
  var catYears = 15
  var dogYears = 15

  if (years > 1) {
    catYears += 9
    dogYears += 9
  }

  if (years > 2) {
    catYears += ((years - 2) * 4)
    dogYears += ((years - 2) * 5)
  }

  return arrayOf(years, catYears, dogYears)
}