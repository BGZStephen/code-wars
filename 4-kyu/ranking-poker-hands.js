/*

A famous casino is suddenly faced with a sharp decline of their revenues. They decide to offer Texas hold'em also online. Can you help them by writing an algorithm that can rank poker hands?

Task:

Create a poker hand that has a method to compare itself to another poker hand:
    PokerHand.prototype.compareWith = function(hand){...};
A poker hand has a constructor that accepts a string containing 5 cards:
    var hand = new PokerHand("KS 2H 5C JD TD");
The characteristics of the string of cards are:
A space is used as card seperator
Each card consists of two characters
The first character is the value of the card, valid characters are:
2, 3, 4, 5, 6, 7, 8, 9, T(en), J(ack), Q(ueen), K(ing), A(ce)
The second character represents the suit, valid characters are:
S(pades), H(earts), D(iamonds), C(lubs)

The result of your poker hand compare can be one of these 3 options:
    var Result =
    {
        "win": 1,
        "loss": 2,
        "tie": 3
    }
Apply the Texas Hold'em rules for ranking the cards.
There is no ranking for the suits.

*/

const HAND_RANKS = [
  {
    name: 'Straight Flush',
    rank: 1
  },
  {
    name: 'Four of a kind',
    rank: 2
  },
  {
    name: 'Full house',
    rank: 3
  },
  {
    name: 'Flush',
    rank: 4
  },
  {
    name: 'Straight',
    rank: 5
  },
  {
    name: 'Three of a kind',
    rank: 6
  },
  {
    name: 'Two pair',
    rank: 7
  },
  {
    name: 'One pair',
    rank: 8
  },
  {
    name: 'High card',
    rank: 9
  },
]

const CARD_VALUES = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
}

function PokerHand(playerHand, opponentHand) {
  playerHand = playerHand.split(' ').sort(function (a, b) {
    return CARD_VALUES[a[0]] > CARD_VALUES[b[0]]
  }).join(', ').replace(/,/g, '')

}

PokerHand.prototype.compareWith = function(hand){
    return Result.tie;
}

PokerHand("2S AH 4H 5S 6C", "AD 4C 5H 6H 2C")
