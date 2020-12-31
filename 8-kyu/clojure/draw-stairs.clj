;; Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

;; For example n = 3 result in:

;; "I\n I\n  I"
;; or printed:

;; I
;;  I
;;   I
;; Another example, a 7-step stairs should be drawn like this:

;; I
;;  I
;;   I
;;    I
;;     I
;;      I
;;       I

(ns kata
  (:require [clojure.string :as str]))

(defn draw-stairs [n]
  (def res "")

  (loop [x 1]
    (when (<= x n)
      (def res (str res (str/join " " (repeat x "")) "I"))
      (if (not (> (+ x 1) n)) (def res (str res "\n")))
      (recur (+ x 1))))

  (str res))
