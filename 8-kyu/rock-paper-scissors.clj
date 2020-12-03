;; Rock Paper Scissors
;; Let's play! You have to return which player won! In case of a draw return Draw!.

;; Examples:

;; rps('scissors','paper') // Player 1 won!
;; rps('scissors','rock') // Player 2 won!
;; rps('paper','paper') // Draw!

(ns rock-paper-scissors)

(defn rps [p1 p2]
  (cond
    (= p1 p2) "Draw!"
    (and (= p1 "rock") (= p2 "paper")) "Player 2 won!"
    (and (= p1 "rock") (= p2 "scissors")) "Player 1 won!"
    (and (= p1 "paper") (= p2 "rock")) "Player 1 won!"
    (and (= p1 "paper") (= p2 "scissors")) "Player 2 won!"
    (and (= p1 "scissors") (= p2 "paper")) "Player 1 won!"
    (and (= p1 "scissors") (= p2 "rock")) "Player 2 won!"))