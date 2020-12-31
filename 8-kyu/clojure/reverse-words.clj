; Complete the solution so that it reverses all of the words within the string passed in.

; Example:

; solution("The greatest victory is that which requires no battle") 
; # should return "battle no requires which that is victory greatest The"

(ns kata
  (:require [clojure.string :as str]))
(defn reverse-words [words]
  (str/join " " (reverse (str/split words #" "))))