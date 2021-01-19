;; You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

;; Find max(abs(length(x) − length(y)))

;; If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

;; Example:
;; a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
;; a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
;; mxdiflg(a1, a2) --> 13
;; Bash note:
;; input : 2 strings with substrings separated by ,
;; output: number as a string

(ns maxdifflength.core)

(defn get-min
  [values]
  (->> values
       (map #(.length %))
       (reduce min)))

(defn get-max
  [values]
  (->> values
       (map #(.length %))
       (reduce max)))

(defn mxdiflg [a1 a2]
  (if (or (= 0 (count a1)) (= 0 (count a2))) -1
      (let [min-a (get-min a1)
            max-a (get-max a1)
            min-b (get-min a2)
            max-b (get-max a2)]
        (reduce max (filter #(> % 0) [(- max-a min-b) (- max-b min-a)])))))