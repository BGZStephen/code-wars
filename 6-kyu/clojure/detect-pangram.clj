;; A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant) .

;; Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

(ns Pangram
  (:require [clojure.string :refer [lower-case]]))

(defn get-unique-ascii
  [s]
    (->> (lower-case s)  
       (map int)
       set)
  )

(defn pangram?
  [s]
  (let [ascii-chars (get-unique-ascii s)]
    ascii-chars
    (every? true? (map #(contains? ascii-chars %) (range 97 123))))
  )