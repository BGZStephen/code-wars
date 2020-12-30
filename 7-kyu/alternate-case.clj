;; Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

(ns kata.alternate-case
  (:require [clojure.string :as str]))

(defn invert-case [s]
  (let [is-string-uppercase? (= s (str/upper-case s))]
    (if is-string-uppercase?
      (str/lower-case s)
      (str/upper-case s)
      )
    ))

(defn alternate-case [s]
  ;; (str/split s #"")
  (->> (str/split s #"")
      (map invert-case)
      (str/join ""))
  )

(println (alternate-case "Hello World!"))