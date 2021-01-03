;; Definition (Primorial Of a Number)
;; Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

;; Task
;; Given a number N , calculate its primorial.

(ns kata)

(defn is-prime?
  [n]
  (let [divisors (range 2 (inc (int (Math/sqrt n))))
        remainders (map #(mod n %) divisors)]
    (not-any? #(= % 0) remainders)))

(defn num-primorial
  [n]
  (->> (iterate inc 2)
       (filter is-prime?)
       (take n)
       (reduce *')))
