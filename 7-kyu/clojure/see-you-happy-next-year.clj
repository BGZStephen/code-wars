;; Happy Year is the year with only distinct digits , (e.g) 2018

;; Given a year, find the next happy year

(ns kata
  (:require [clojure.string :as str]))

(defn is-happy-year? [year]
  (let [str-year (str year)
        length (count str-year)
        uniques (set (str/split str-year #""))]
    (= length (count uniques))))

(defn next-happy-year [year]
  (if (is-happy-year? year) year
      (next-happy-year (inc year))))