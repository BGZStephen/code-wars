;; Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

;; Examples:

;; (solution "abc") ; => ["ab" "c_"]
;; (solution "abcd") ; => ["ab" "cd"]

(ns split-str.core)

(defn solution
  [s]
  (vec (map (fn [[a b]] (str a b)) (partition 2 2 "_" s))))