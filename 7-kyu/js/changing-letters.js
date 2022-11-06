// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
  const vowelsMap = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  }
  
  return string.split("").map((character) => {
    if (vowelsMap[character]) {
      return character.toUpperCase()
    }
    
    return character;
  }).join("")
}