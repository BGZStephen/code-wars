// In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!

function solve(arr) {
  const maxSorted = arr
    .sort((a, b) => b - a)
    .slice(0, Math.ceil(arr.length / 2));
  const minSorted = arr
    .sort((a, b) => a - b)
    .slice(0, Math.floor(arr.length / 2));

  let res = [];

  for (let i = 0; i < maxSorted.length; i++) {
    res.push(maxSorted[i]);

    if (typeof minSorted[i] === "number") {
      res.push(minSorted[i]);
    }
  }

  return res;
}
