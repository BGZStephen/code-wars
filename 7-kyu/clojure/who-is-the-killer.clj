;; Who is the killer?
;; Some people have been killed!
;; You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

;; Task.
;; Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

;; {'James': ['Jacob', 'Bill', 'Lucas'],
;;  'Johnny': ['David', 'Kyle', 'Lucas'],
;;  'Peter': ['Lucy', 'Kyle']}
;; and also a list of the names of the dead people:

;; ['Lucas', 'Bill']
;; return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

(ns kata
  (:require [clojure.set :as set]))

(defn suspect-met-dead? [suspect dead]
  (-> suspect
      (last)
      (set)
      (set/intersection (set dead))
      (count)
      (= (count dead))))


(defn who-is-the-killer [suspects, dead]
  (->> suspects
       (filter #(suspect-met-dead? % dead))
       first
       first))

(println (who-is-the-killer {:james [:jacob :bill :lucas]
                             :johnny [:david :kyle :lucas]
                             :peter [:lucy :kyle]}
                            [:lucas :bill]))
