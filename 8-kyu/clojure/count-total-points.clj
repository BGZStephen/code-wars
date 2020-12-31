;; Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the array.

;; For example: ["3:1", "2:2", "0:1", ...]

;; Write a function that takes such list and counts the points of our team in the championship. Rules for counting points for each match:
;; •if x>y - 3 points
;; •if x<y - 0 point
;; •if x=y - 1 point

(ns kata
  (:require [clojure.string :as str]))

(defn get-points-from-string [strng]
  (let [[home-score away-score] (map #(Integer/parseInt %) (str/split strng #":"))]
    (cond
      (= home-score away-score) 1
      (> home-score away-score) 3
      :else 0
      )))

(defn points [scores]
  (reduce + (map get-points-from-string scores)))