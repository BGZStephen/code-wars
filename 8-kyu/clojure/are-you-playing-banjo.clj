;;  Create a function which answers the question "Are you playing banjo?".
;;  If your name starts with the letter "R" or lower case "r", you are playing banjo!
;;  The function takes a name as its only argument, and returns one of the following strings:
;;  name + " plays banjo" 
;;  name + " does not play banjo"
;;  Names given are always valid strings.

(ns kata
  (:require [clojure.string :as str]))

(defn are_you_playing_banjo [name]
  (if (= (str/lower-case (first name)) "r") (str name " plays banjo") (str name " does not play banjo")))