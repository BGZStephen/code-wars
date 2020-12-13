;; An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

;; Example:

;; The starting array sequence is [1,2,3,4,5,6,7,8,9]
;; The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
;; Your function should return the int 5.
;; If no number was deleted from the array and no difference with it, your function should return the int 0.

;; Note that N may be 1 or less (in the latter case, the first array will be []).

(ns kata
  (:require [clojure.set :as set]))

(defn find-deleted-number [arr mixed-arr]
  (first (set/difference (set arr) (set mixed-arr))))