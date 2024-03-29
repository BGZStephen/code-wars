// In this Kata you will be given an array representing contestant ranks. You must eliminate contestant in series of rounds comparing consecutive pairs of ranks and store all initial and intermediate results in an array.

// During one round, the lowest rank of a pair is eliminated while the highest proceeds to the next round. This goes on until one contestant only is left. If the number of contestants is odd, the last one of the current array becomes the first of the next round.

// At the end of the competition, return the results of all the rounds in the form of array of arrays:

// input = [9, 5, 4, 7, 6, 3, 8, 2];

// tourney(input) === [
//   [9, 5, 4, 7, 6, 3, 8, 2],  // first round is initial input
//   [9, 7, 6, 8],              // results of 9 vs 5, 4 vs 7, 6 vs 3, and 8 vs 2
//   [9, 8],                    // results of 9 vs 7 and 6 vs 8
//   [9]                        // results of 9 vs 8
// ];
// With an odd length:

// input = [9, 5, 4, 7, 6, 3, 8];
// tourney(input) === [
//   [9, 5, 4, 7, 6, 3, 8],
//   [8, 9, 7, 6],           // 8 is now first because it was last in the former round
//   [9, 7],
//   [9]
// ];
// Notes:

// Array length will alway be >= 2 and <= 100
// Elements of the array will always be >=1 and <= 100
// Input must not be altered.

const tourney = (array) => {
  let results = [array];

  while (results[results.length - 1].length > 1) {
    results.push(roundResults(results[results.length - 1]));
  }

  return results;
};

const roundResults = (participants) => {
  const results = [];
  if (participants.length % 2 !== 0) {
    results.push(participants[participants.length - 1]);
  }

  for (let i = 0, j = 1; i < participants.length - 1; i += 2, j += 2) {
    results.push(
      participants[i] > participants[j] ? participants[i] : participants[j]
    );
  }

  return results;
};
