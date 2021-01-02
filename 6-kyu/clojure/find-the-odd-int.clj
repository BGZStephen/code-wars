;; Given an array of integers, find the one that appears an odd number of times.

;; There will always be only one integer that appears an odd number of times.

(ns find-the-odd-int)

(defn find-odd [xs]
  (ffirst (filter (fn [[_ v]] (odd? v)) (frequencies xs))))