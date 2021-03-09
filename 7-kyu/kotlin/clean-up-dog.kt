fun crap(x: Array<CharArray>, bags: Int, cap: Int): String {
  val totalCap = bags * cap
  var capRequired = 0
  val dog = "D".single()
  val rubbish = "@".single()

  for (row in x) {
    for (cell in row) {
      if (cell == dog) {
        return "Dog!!"
      }

      if (cell == rubbish) {
        capRequired += 1
      }
    }
  }

  return if (capRequired > totalCap) {
    "Cr@p"
  } else {
    "Clean"
  }
}