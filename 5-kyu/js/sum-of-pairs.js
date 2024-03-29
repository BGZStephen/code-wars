// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]

function sumPairs(ints, s) {
  let bestMatch = undefined;

  const generallyUniqueInts = [];

  for (const [index, value] of ints.entries()) {
    if (ints[index + 1] !== value || ints[index + 2] !== value) {
      generallyUniqueInts.push(value);
    }
  }

  for (let i = 0; i < generallyUniqueInts.length - 1; i += 1) {
    if (bestMatch && i > bestMatch.endIndex) {
      return bestMatch.values;
    }

    for (let j = i + 1; j < generallyUniqueInts.length; j += 1) {
      if (bestMatch && i > bestMatch.endIndex) {
        break;
      }

      if (generallyUniqueInts[i] + generallyUniqueInts[j] === s) {
        if (!bestMatch) {
          bestMatch = {
            startIndex: i,
            endIndex: j,
            values: [generallyUniqueInts[i], generallyUniqueInts[j]],
          };
        }

        if (
          j < bestMatch.endIndex &&
          j - i < bestMatch.endIndex - bestMatch.startIndex
        ) {
          bestMatch = {
            startIndex: i,
            endIndex: j,
            values: [generallyUniqueInts[i], generallyUniqueInts[j]],
          };
        }
      }
    }
  }

  if (!bestMatch) {
    return bestMatch;
  }

  return bestMatch.values;
}
