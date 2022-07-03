// Write

// function consecutiveOnes(nums) {}
// that takes in array nums and returns the maximum consecutive 1's

// For example

// consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
// consecutiveOnes([1, 1, 0, 0, 1]) === 2
// consecutiveOnes([0, 0, 0, 0, 0]) === 0

function consecutiveOnes(nums) {
  if (!nums.includes(1)) {
    return 0;
  }

  let res = 1;

  const matching = nums.join("").match(/1+1/g);

  if (!matching) {
    return res;
  }

  const consecutives = matching.sort()[matching.length - 1];

  if (!consecutives) {
    return res;
  }

  return consecutives.length;
}
