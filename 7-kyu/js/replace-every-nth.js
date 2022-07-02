// Task
// Write a method, that replaces every nth char oldValue with char newValue.

// Inputs
// text: the string to modify
// n: change the target letter every nth occurrencies
// old_value (or similar): the targetted character
// new_value (or similar): the character to use as replacement
// Note for untyped languages: all inputs are always valid and of their expected type.

// Rules
// Your method has to be case sensitive!
// If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.
// Example:
// n:         2
// old_value: 'a'
// new_value: 'o'
// "Vader said: No, I am your father!"
//   1     2          3        4       -> 2nd and 4th occurence are replaced
// "Vader soid: No, I am your fother!"
// As you can see in the example: The first changed is the 2nd 'a'. So the start is always at the nth suitable char and not at the first!

function replaceNth(text, n, oldValue, newValue) {
  if (n < 0 || n > text.length) {
    return text;
  };

  const splitString = text.split("")

  let currentPosition = 1;

  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === oldValue && currentPosition === n) {
      splitString[i] = newValue;
      currentPosition = 1;
      continue;
    }

    if (splitString[i] === oldValue && currentPosition !== n) {
      currentPosition += 1;
    }

  }

  return splitString.join("");
}