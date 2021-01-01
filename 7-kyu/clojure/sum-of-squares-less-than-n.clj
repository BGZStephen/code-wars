;; Write a function getNumberOfSquares (C, F#, Haskell) / get_number_of_squares (Python, Ruby) that will return how many integer (starting from 1, 2...) numbers raised to power of 2 and then summed up are less than some number given as a parameter.

;; E.g 1: For n = 6 result should be 2 because 1^2 + 2^2 = 1 + 4 = 5 and 5 < 6 E.g 2: For n = 15 result should be 3 because 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14 and 14 < 15

(ns number-of-squares)

(defn get-number-of-squares
  ([n]
   (get-number-of-squares n 0 0))
  ([n count sum]
   (if (>= (+ sum (Math/pow (inc count) 2)) n)
     count
     (get-number-of-squares n (inc count) (+ sum (Math/pow (inc count) 2))))))