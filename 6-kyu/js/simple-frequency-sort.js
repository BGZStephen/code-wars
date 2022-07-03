// In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// --we sort by highest frequency to lowest frequency. If two elements have same frequency, we sort by increasing value
// More examples in test cases.

// Good luck!

function solve(arr) {
  const frequency = {};
  const groupedArr = [];

  for (const number of arr) {
    if (!frequency[number]) {
      frequency[number] = 0;
    }

    frequency[number] += 1;
  }

  for (const key of Object.keys(frequency)) {
    groupedArr.push(new Array(frequency[key]).fill(parseInt(key)));
  }

  groupedArr.sort((a, b) => {
    if (a.length < b.length) {
      return 1;
    }

    if (a.length === b.length && a[0] > b[0]) {
      return 1;
    }

    return -1;
  });

  return [].concat.apply([], groupedArr);
}
