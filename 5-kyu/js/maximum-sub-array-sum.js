/*

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/

var maxSequence = function (arr) {
  let maxSum = 0;
  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let subSet = arr.slice(i, j);
      let maxToTest = subSet.reduce(function (a, b) {
        return a + b;
      });
      if (maxToTest > maxSum) {
        maxSum = maxToTest;
      }
    }
  }
  console.log(maxSum);
  return maxSum;
};

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
