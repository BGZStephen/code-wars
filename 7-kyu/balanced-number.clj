;; Notes
;; If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

;; The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

;; Number passed is always Positive .

;; Return the result as String

;; Input >> Output Examples
;; (balanced-num 7) ==> return "Balanced"
;; Explanation:
;; Since , The sum of all digits to the left of the middle digit (0)

;; and the sum of all digits to the right of the middle digit (0) are equal , then It's Balanced

;; (balanced-num 295591) ==> return "Not Balanced"
;; Explanation:
;; Since , The sum of all digits to the left of the middle digits (11)

;; and the sum of all digits to the right of the middle digits (10) are Not equal , then It's Not Balanced

;; Note : The middle digit(s) are 55 .

;; (balanced-num 959) ==> return "Balanced"
;; Explanation:
;; Since , The sum of all digits to the left of the middle digits (9)

;; and the sum of all digits to the right of the middle digits (9) are equal , then It's Balanced

;; Note : The middle digit is 5 .

;; (balanced-num 27102983) ==> return "Not Balanced"
;; Explanation:
;; Since , The sum of all digits to the left of the middle digits (10)

;; and the sum of all digits to the right of the middle digits (20) are Not equal , then It's Not Balanced

;; Note : The middle digit(s) are 02 .


(defn to-int-vector
  [num]
  (map #(Integer/parseInt %) (str/split (str num) #"")))


(defn balanced-num
  [num])