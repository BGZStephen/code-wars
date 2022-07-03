// Description:
// Groups of characters decided to make a battle. Help them to figure out what group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

// Rules:
// Each character has its own power:
//   A = 1, B = 2, ... Y = 25, Z = 26
//   a = 0.5, b = 1, ... y = 12.5, z = 13
// Only alphabetical characters can and will participate in a battle.
// Only two groups to a fight.
// Group whose total power (a + B + c + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//   battle("One", "Two"); // => "Two"`
//   battle("ONE", "NEO"); // => "Tie!"

function battle(x, y) {
  let xScore = 0;
  let yScore = 0;

  for (const character of x) {
    if (character === character.toUpperCase()) {
      xScore += character.charCodeAt(0) - 64;
    } else {
      xScore += (character.toUpperCase().charCodeAt(0) - 64) / 2;
    }
  }

  for (const character of y) {
    if (character === character.toUpperCase()) {
      yScore += character.charCodeAt(0) - 64;
    } else {
      yScore += (character.toUpperCase().charCodeAt(0) - 64) / 2;
    }
  }

  if (xScore > yScore) {
    return x;
  }

  if (yScore > xScore) {
    return y;
  }

  return "Tie!";
}

// console.log(battle("One", "Two"))
console.log(battle("One", "Neo"));
// console.log(battle("One", "neO"))
// console.log(battle("Four", "Five"))
