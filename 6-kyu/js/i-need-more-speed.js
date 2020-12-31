// Write a function that will take in any array and reverse it.

// Sounds simple doesn't it?

// NOTES:

// Array should be reversed in place! (no need to return it)
// Usual builtins have been deactivated. Don't count on them.
// You'll have to do it fast enough, so think about performances

function reverse(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const tempA = arr[start]
    const tempB = arr[end]

    arr[end] = tempA
    arr[start] = tempB

    start ++;
    end --;
  }

  return arr;
}