; Write a function called repeat_str which repeats the given string src exactly count times.

; repeatStr(6, "I") // "IIIIII"
; repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

(ns clojure.string-repeat)

(defn repeat-str [n strng]
  (apply str (repeat n strng)))