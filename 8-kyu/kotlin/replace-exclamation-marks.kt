fun replace(s: String): String {
  return s.replace("[aeiouAEIOU]".toRegex(), "!")
}