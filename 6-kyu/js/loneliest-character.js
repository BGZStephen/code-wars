// Complete the function which accepts a string and return an array of character(s) that have the most spaces to their right and left.

// Notes:

// the string can have leading/trailing spaces - you should not count them
// the strings contain only unique characters from a to z
// the order of characters in the returned array doesn"t matter
// Examples
// "a b  c"                        -->  ["b"]
// "a bcs           d k"           -->  ["d"]
// "    a b  sc     p     t   k"   -->  ["p"]
// "a  b  c  de"                   -->  ["b", "c"]
// "     a  b  c de        "       -->  ["b"]
// "abc"                           -->  ["a", "b", "c"]
// Good luck!

function loneliest(str) {
  str = str.trim();

  const result = {
    spaceCount: 0,
    values: [],
  };

  if (!str.match(/ /)) {
    return str.split("");
  }

  const splitString = str.split("");

  for (let [index, char] of splitString.entries()) {
    if (char.match(/\w/)) {
      let leftSpaceCount = 0;
      let rightSpaceCount = 0;
      let leftSpaceIndex = index - 1;
      let rightSpaceIndex = index + 1;

      while (
        splitString[leftSpaceIndex] &&
        splitString[leftSpaceIndex].match(/ /)
      ) {
        leftSpaceCount += 1;
        leftSpaceIndex -= 1;
      }

      while (
        splitString[rightSpaceIndex] &&
        splitString[rightSpaceIndex].match(/ /)
      ) {
        rightSpaceCount += 1;
        rightSpaceIndex += 1;
      }

      const totalSpaceCount = leftSpaceCount + rightSpaceCount;

      if (totalSpaceCount > result.spaceCount) {
        result.spaceCount = totalSpaceCount;
        result.values = [splitString[index]];
      } else if (totalSpaceCount === result.spaceCount) {
        result.values.push(splitString[index]);
      }
    }
  }

  return result.values;
}
