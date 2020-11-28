; Now you have to write a function that takes an argument and returns the square of it.

(ns kata)

(defn square [n]
  (int (Math/pow n 2))
)