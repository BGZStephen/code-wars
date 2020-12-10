;; Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

;; SQL: return results in a column named greeting

(ns kata)

(defn greet [name]
  (str "Hello, " name " how are you doing today?"))
