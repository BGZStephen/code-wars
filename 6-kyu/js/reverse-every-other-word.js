// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are apart of the word in this kata.

function reverse(str) {
  let splitString = str.trim().split(" ");

  for (let i = 1; i < splitString.length; i += 2) {
    splitString[i] = splitString[i].split("").reverse().join("");
  }

  return splitString.join(" ");
}
