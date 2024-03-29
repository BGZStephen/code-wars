// The goal of this exercise is to transform a flat array into one grouped by category. Each item in the array is an object with the following shape:

// const original = {
//   _distinctSeqID: number,
//   category: string,
//   ...otherThings
// }
// The goal at the end is to create an array of objects for each of the categories, where each object has the following shape:

// const final = {
//   distinctAttribute: string,
//   results: [
//     ...objects, // the complete original objects
//   ],
// }
// The array will be already sorted by category. This means that you might have one or multiple objects of the same category, but each category will only occur once, there won't be repetitions afterwards.

// The _distinctSeqID is an incrementing id starting at 0 for a new category, and then augmenting each time an object of the same category comes up.

// Lastly, note that the key "category" is customizable in the function. This is the key that is used for grouping, which your function doesn't need to handle. Just the fact that the attributeForDistinct will the the same as the key you want to have top-level as marker for looping over.

// If you enjoyed this kata, you can also check out groupBy

function distinctResults(results, attributeForDistinct) {
  const groupedByKey = {};
  for (const item of results) {
    if (!groupedByKey[item[attributeForDistinct]]) {
      groupedByKey[item[attributeForDistinct]] = {
        distinctAttribute: item[attributeForDistinct],
        results: [item],
      };
    } else {
      groupedByKey[item[attributeForDistinct]].results.push(item);
    }
  }

  const res = [];

  for (const key of Object.keys(groupedByKey)) {
    res.push(groupedByKey[key]);
  }

  return res;
}

const original = [
  {
    _distinctSeqID: 0,
    category: "people",
    name: "me",
  },
  {
    _distinctSeqID: 1,
    category: "people",
    name: "you",
  },
  {
    _distinctSeqID: 2,
    category: "people",
    name: "them",
  },
  {
    _distinctSeqID: 0,
    category: "animals",
    name: "dog",
  },
  {
    _distinctSeqID: 1,
    category: "animals",
    name: "cat",
  },
  {
    _distinctSeqID: 2,
    category: "animals",
    name: "squirrel",
  },
  {
    _distinctSeqID: 0,
    category: "buildings",
    name: "bank",
  },
  {
    _distinctSeqID: 1,
    category: "buildings",
    name: "house",
  },
  {
    _distinctSeqID: 0,
    category: "names",
    name: "john",
  },
  {
    _distinctSeqID: 1,
    category: "names",
    name: "francine",
  },
  {
    _distinctSeqID: 2,
    category: "names",
    name: "abi",
  },
  {
    _distinctSeqID: 3,
    category: "names",
    name: "haroen",
  },
];

console.log(distinctResults(original, "category"));
