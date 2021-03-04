object AreYouPlayingBanjo {
  fun areYouPlayingBanjo(name:String):String {
    return if (name[0] == 'R' || name[0] == 'r') "$name plays banjo" else "$name does not play banjo"
  }
}