// Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

// Return `nil` if the argument is not valid.
// Returm null if the argument is invalid.

// maxRedigit(123) --> 321

var maxRedigit = function (num) {
  if (num.toString().length !== 3) {
    return null;
  }

  return parseInt(num.toString().split("").sort().reverse().join(""));
};
