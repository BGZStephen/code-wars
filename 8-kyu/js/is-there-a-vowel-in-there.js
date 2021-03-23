// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a){
  const vowelsAsInts = ["a", "e", "i", "o", "u"].map(number => number.charCodeAt(0))

  return a.map(number => vowelsAsInts.includes(number) ? String.fromCharCode(number) : number)
}