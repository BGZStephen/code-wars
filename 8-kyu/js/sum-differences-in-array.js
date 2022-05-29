// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
    arr = arr.sort((a, b) => b - a)
    let res = 0;
    
    if (arr.length < 2) {
      return 0
    }
    
    for (let i = 0, j = 1; j < arr.length; i++, j++) {
      res += arr[i] - arr[j]
    }
    
    return res;
  }