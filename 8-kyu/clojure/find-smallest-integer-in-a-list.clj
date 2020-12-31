;; Given an array of integers your solution should find the smallest integer.

(ns kata)

(defn find-smallets-int [ints]
  (reduce min ints))