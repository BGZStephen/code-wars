;; You are given two interior angles (in degrees) of a triangle.

;; Write a function to return the 3rd.

;; Note: only positive integers will be tested.

;; https://en.wikipedia.org/wiki/Triangle

(ns third-angle-of-triangle.core)

(defn third-angle [a b]
  (-> 180
      (- a)
      (- b))
  )