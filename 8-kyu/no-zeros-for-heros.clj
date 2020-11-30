;; Numbers ending with zeros are boring.

;; They might be fun in your world, but not here.

;; Get rid of them. Only the ending ones.

;; 1450 -> 145
;; 960000 -> 96
;; 1050 -> 105
;; -1050 -> -105
;; Zero alone is fine, don't worry about it. Poor guy anyway

(ns noboringzeros.core
  (:require [clojure.string :as str]))

(defn no-boring-zeros [n]
  (def res (str/replace (str n) #"0*$" ""))
  
  (if (empty? res) 0 (Integer/parseInt res))
)