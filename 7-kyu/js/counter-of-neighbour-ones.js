// Task
// Tranform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array

// Example
// [1, 1, 1, 0, 1] -> [3,1]
// [1, 1, 1, 1, 1] -> [5]
// [0, 0, 0, 0, 0] -> []

function onesCounter(input) {
  return input
    .join("")
    .split("0")
    .filter((string) => string.length > 0)
    .map((string) => string.length);
}
