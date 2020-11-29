; Complete the square sum function so that it squares each number passed into it and then sums the results together.

; For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

(ns kata)

(defn square-sum [lst]
  (def res 0)

  (doseq [item lst]
    (def res
      (+ res
         (Math/pow
          item
          2))))

  (int res))