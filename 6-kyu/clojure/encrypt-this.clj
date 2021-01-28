; Acknowledgments:
; I thank yvonne-liu for the idea and for the example tests :)

; Description:
; Encrypt this!

; You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

; Your message is a string containing space separated words.
; You need to encrypt each word in the message using the following rules:
; The first letter needs to be converted to its ASCII code.
; The second letter needs to be switched with the last letter
; Keepin' it simple: There are no special characters in input.
; Examples:
; (= (encrypt-this "Hello") "72olle")
; (= (encrypt-this "good" ) "103doo")
; (= (encrypt-this "hello world") "104olle 119drlo")

(ns kata.core
  (:require [clojure.string :as str]))

(defn first-letter-to-ascii
  [text]
  (str (int (first text)) (str/join "" (rest text))))

(defn swap-second-and-last-letter
  [text]
  (let [first-letter (first text)
        second-letter (first (rest text))
        last-letter (last text)]
    (if (nil? second-letter) text
        (str first-letter last-letter (subs text 2 (dec (.length text))) second-letter))))

(defn encrypt-this
  [text]
  (->> (str/split text #" ")
       (map swap-second-and-last-letter)
       (map first-letter-to-ascii)
       (str/join " ")))

(println (encrypt-this "Hello"))
(println (encrypt-this "hello world"))