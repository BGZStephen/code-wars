/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array. */

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  let positive = 0;
  let negative = 0;

  for (const number of input) {
    if (number > 0) {
      positive += 1;
    } else {
      negative += number;
    }
  }

  return [positive, negative];
}
