// Imagine a circle. To encode the word codewars, we could split the circle into 8 parts (as codewars has 8 letters):

// Then add the letters in a clockwise direction:Then remove the circle:
// If we read the result from left to right, we get csordaew.

// Decoding is the same process in reverse. If we decode csordaew, we get codewars.

// Examples:
// encode "codewars" -> "csordaew"
// decode "csordaew" -> "codewars"
// encode "white" -> "wehti"
// decode "wehti" -> "white"

function encode(s) {
  const splitString = s.split("")
  let nextAction = "shift";
  let res = "";
  
  while (splitString.length > 0) {
    if (nextAction === "shift") {
      res += splitString.shift()
      nextAction = "pop"
    } else {
      res += splitString.pop()
      nextAction = "shift"
    }
  }
  
  return res;
}

function decode(s) {
  const splitString = s.split("")
  let res = splitString.filter((v, i) => i % 2 === 0).join("")
  res += splitString.filter((v, i) => i % 2 !== 0).reverse().join("")
  return res;
}