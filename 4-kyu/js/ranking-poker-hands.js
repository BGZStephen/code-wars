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

var Result = { win: 1, loss: 2, tie: 3 };

const HAND_RANKS = {
  "straight-flush": 1,
  "four-of-a-kind": 2,
  "full-house": 3,
  flush: 4,
  straight: 5,
  "three-of-a-kind": 6,
  "two-pair": 7,
  "one-pair": 8,
  "high-card": 9,
};

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
};

function PokerHand(hand) {
  this.handValue = hand;
  hand = hand.split(" ").sort(function (a, b) {
    return CARD_VALUES[a[0]] > CARD_VALUES[b[0]];
  });

  const handSuits = {
    S: 0,
    H: 0,
    C: 0,
    D: 0,
  };

  const handValues = {
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
  };

  hand.forEach(function (card) {
    handSuits[card[1]] += 1;
  });

  hand.forEach(function (card) {
    handValues[card[0]] += 1;
  });

  Object.values(handSuits).forEach(function (suit) {
    if (suit === 5) {
      const straightFlushCheck = checkStraight();
      if (straightFlushCheck) {
        console.log(HAND_RANKS["straight-flush"]);
        this.handRank = HAND_RANKS["straight-flush"];
        return;
      }
      console.log(HAND_RANKS["flush"]);
      this.handRank = HAND_RANKS["flush"];
      return;
    }
  });

  Object.values(handValues).forEach(function (value) {
    if (value === 4) {
      console.log(HAND_RANKS["four-of-a-kind"]);
      this.handRank = HAND_RANKS["four-of-a-kind"];
      return;
    }
  });

  const sortedhandValues = Object.values(handValues).sort();

  if (
    sortedhandValues.indexOf(3) !== -1 &&
    sortedhandValues.indexOf(2) !== -1
  ) {
    console.log(HAND_RANKS["full-house"]);
    this.handRank = HAND_RANKS["full-house"];
    return;
  } else if (sortedhandValues.indexOf(3) !== -1) {
    console.log(HAND_RANKS["three-of-a-kind"]);
    this.handRank = HAND_RANKS["three-of-a-kind"];
    return;
  }

  let numberOfPairs = 0;

  sortedhandValues.forEach(function (value) {
    if (value === 2) {
      numberOfPairs += 1;
    }
  });

  if (numberOfPairs === 2) {
    console.log(HAND_RANKS["two-pair"]);
    this.handRank = HAND_RANKS["two-pair"];
    return;
  } else if (numberOfPairs === 1) {
    console.log(HAND_RANKS["one-pair"]);
    this.handRank = HAND_RANKS["one-pair"];
    return;
  } else {
    this.handRank = HAND_RANKS["high-card"];
    return;
  }

  function checkStraight() {
    let sequence = 1;
    for (let i = 0; i < playerHand.length - 1; i++) {
      if (
        CARD_VALUES[playerHand[i][0]] + 1 ===
        CARD_VALUES[playerHand[i + 1][0]]
      ) {
        sequence += 1;
      }
    }
    return sequence === 5 ? true : false;
  }
}

PokerHand.prototype.compareWith = function (hand) {
  if (this.handRank > hand.handRank) {
    return Result.win;
  } else if (this.handRank < hand.handRank) {
    return Result.loss;
  } else {
    return Result.tie;
  }
};

function assert(expected, player, opponent) {
  var p = new PokerHand(player);
  var o = new PokerHand(opponent);
  console.log(p.compareWith(o));
}

assert(Result.tie, "2S AH 4H 5S 6C", "AD 4C 5H 6H 2C");
