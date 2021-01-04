;; Positive integers have so many gorgeous features. Some of them could be expressed as a sum of two or more consecutive positive numbers.

;; Consider an Example :
;; 10 , could be expressed as a sum of 1 + 2 + 3 + 4.
;; Task
;; Given Positive integer, N , Return true if it could be expressed as a sum of two or more consecutive positive numbers , OtherWise return false .

;; Notes
;; Guaranteed constraint : 2 ≤ N ≤ (2^31) -1 .
;; Input >> Output Examples:

;; * consecutiveDucks(9)  ==>  return (true)  //  9 , could be expressed as a sum of ( 2 + 3 + 4 ) or ( 4 + 5 ) . 

;; * consecutiveDucks(64)  ==>  return (false)

;; * consecutiveDucks(42)  ==>  return (true) //  42 , could be expressed as a sum of ( 9 + 10 + 11 + 12 )  . 

(ns kata)

(defn consecutive-ducks
  ([n] (consecutive-ducks n (range 1 (inc (int (Math/ceil (/ n 2)))))))
  ([n range]
   (loop [slice-size 2]
     (cond
       (> slice-size (count range)) false
       (> (count (filter (fn [values] (= (reduce + values) n)) (partition slice-size 1 range))) 0) true
       :else (recur (inc slice-size))))))