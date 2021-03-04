fun sum(mixed: List<Any>): Int {
  var res = 0
  for (value in mixed) {
    if (value is String) {
      res += value.toInt()
    }

    if (value is Int) {
      res += value
    }
  }

  return res
}