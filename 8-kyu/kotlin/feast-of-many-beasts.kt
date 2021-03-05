fun feast(beast: String, dish: String): Boolean {
  return (beast.first() == dish.first() && beast.last() == dish.last())
}