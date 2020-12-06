; Write function avg which calculates average of numbers in given list.

(defn find-average
  [numbers]
    (/ (reduce + numbers) (count numbers))
)