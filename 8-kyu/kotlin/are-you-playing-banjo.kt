object AreYouPlayingBanjo {
  fun areYouPlayingBanjo(name:String):String {
    var beginsWithR = name[0] == 'R' || name[0] == 'r'
    return if (beginsWithR) "$name plays banjo" else "$name does not play banjo"
  }
}