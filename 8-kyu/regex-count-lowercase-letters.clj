;; Your task is simply to count the total number of lowercase letters in a string.

;; Examples
;; lowercaseCount ("abc"); ===> 3

;; lowercaseCount ("abcABC123"); ===> 3

;; lowercaseCount ("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

;; lowercaseCount (""); ===> 0;

;; lowercaseCount ("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

;; lowercaseCount ("abcdefghijklmnopqrstuvwxyz"); ===> 26

(ns kata.lowercase-count
  (:require [clojure.string :as str]))
(defn lowercase_count [strng]
  (count (filter #(re-matches #"[a-z]{1}" %) (str/split strng #"")))
  )