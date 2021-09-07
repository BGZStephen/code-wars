// Write a function that accepts two arguments: an array/list of integers and another integer (n).

// Determine the number of times where two integers in the array have a difference of n.

// For example:

// [1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
// [1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)

const intDiff = (arr, n) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] === arr[j] && n === 0) {
          count += 1;
        }

        if (arr[i] < arr[j] && arr[j] - n === arr[i]) {
          count += 1;
        }

        if (arr[j] < arr[i] && arr[i] - n === arr[j]) {
          count += 1;
        }
      }
    } 
  }

  return count / 2;
}

intDiff([1, 1, 3, 3], 2)