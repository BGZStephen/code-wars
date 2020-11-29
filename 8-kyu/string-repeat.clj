; Write a function called repeat_str which repeats the given string src exactly count times.

; repeatStr(6, "I") // "IIIIII"
; repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

(ns clojure.string-repeat)

(defn repeat-str [n strng]
  (def res "")
  (loop [x n]
    (when (> x 0)
      (def res (str res strng))
      (recur (- x 1))))
  (str res))