// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  let res = [];
  const sortedOnlyOdds = array.filter(number => number % 2 !== 0).sort((a, b) => a - b);

  for (const number of array) {
    if (number % 2 === 0) {
      res.push(number)
    } else {
      res.push(sortedOnlyOdds.shift())
    }
  }

  return res;
}