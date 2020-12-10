;; Remove n exclamation marks in the sentence from left to right. n is positive integer.

(ns kata
  (:require [clojure.string :as str]))

(defn remove-n [strng n]
  (loop [x 0 strng strng]
    (if (= x n)
      strng
      (recur (inc x) (str/replace-first strng #"!" "")))
    ))
