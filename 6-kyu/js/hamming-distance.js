// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

function hamming(a, b) {
  let mismatches = 0;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      mismatches += 1;
    }
  }

  return mismatches;
}
