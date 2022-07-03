// You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements, or if there is no such sum: -1 for Python, JavaScript and COBOL, Nothing for Haskell.

// No negative element should be present in this sum.

// Example:

// [4, -1, 6, -2, 3, 5, -7, 7] -> 8
//      ^      ^         ^
// Not 14, because -2 is between -1 and -7, and not 6 but 8, because 8 is bigger.

function maxSumBetweenTwoNegatives(numbers) {
  let res = -1;
  const negativeIndexes = [];

  for (const [index, number] of numbers.entries()) {
    if (number < 0) {
      negativeIndexes.push(index);
    }
  }

  if (negativeIndexes.length < 2) {
    return res;
  }

  res = 0;

  for (let i = 1; i < negativeIndexes.length; i += 1) {
    const negativeSumForSlice = numbers
      .slice(negativeIndexes[i - 1] + 1, negativeIndexes[i])
      .reduce((acc, val) => acc + val, 0);

    if (res < negativeSumForSlice) {
      res = negativeSumForSlice;
    }
  }

  return res;
}

console.log(maxSumBetweenTwoNegatives([-1, 6, -2, 3, 5, -7]));
console.log(maxSumBetweenTwoNegatives([5, -1, -2]));
console.log(maxSumBetweenTwoNegatives([1, -2]));
