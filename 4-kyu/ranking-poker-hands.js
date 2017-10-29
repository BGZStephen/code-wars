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

const HAND_RANKS = {
  'straight-flush':  1,
  'four-of-a-kind': 2,
  'full-house': 3,
  'flush': 4,
  'straight': 5,
  'three-of-a-kind': 6,
  'two-pair': 7,
  'one-pair': 8,
  'high-card': 9,
}

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
  })

  const playerHandSuits = {
    S: 0,
    H: 0,
    C: 0,
    D: 0,
  }

  const playerHandValues = {
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    T: 0,
    J: 0,
    Q: 0,
    K: 0,
    A: 0,
  }

  playerHand.forEach(function (card) {
    playerHandSuits[card[1]] += 1
  })

  playerHand.forEach(function (card) {
    playerHandValues[card[0]] += 1
  })

  Object.values(playerHandSuits).forEach(function (suit) {
    if (suit === 5) {
      const straightFlushCheck = checkStraight()
      if (straightFlushCheck) {
        console.log(HAND_RANKS['straight-flush'])
        return HAND_RANKS['straight-flush']
      }
      console.log(HAND_RANKS['flush'])
      return HAND_RANKS['flush']
    }
  })

  Object.values(playerHandValues).forEach(function (value) {
    if (value === 4) {
      console.log(HAND_RANKS['four-of-a-kind'])
      return HAND_RANKS['four-of-a-kind']
    }
  })

  playerHandValues.sort();
  for(let i = 0; i < playerHandValues.length -1; i++) {
    if (playerHandValues[i] === 3 && playerHandValues[i + 1] === 2) {
      return HAND_RANKS['full-house'];
    }
  }

  function checkStraight() {
    let sequence = 1
    for (let i = 0; i < playerHand.length -1; i++) {
      if (CARD_VALUES[playerHand[i][0]] + 1 === CARD_VALUES[playerHand[i + 1][0]]) {
        sequence += 1
      }
    }
    return sequence === 5 ? true : false
  }

}

PokerHand.prototype.compareWith = function(hand){
    return Result.tie;
}

// PokerHand("2S AH 4H 5S 6C", "AD 4C 5H 6H 2C")
PokerHand("2S 2c 2h 4d 4S", "AD 4C 5H 6H 2C")
