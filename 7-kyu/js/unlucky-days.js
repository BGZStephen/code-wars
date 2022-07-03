// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year as an integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1
// Note: In Ruby years will start from 1593.

function unluckyDays(year) {
  let count = 0;
  for (let i = 1; i < 13; i++) {
    if (new Date(`${year}-${i >= 10 ? i : `0${i}`}-13`).getDay() === 5) {
      count += 1;
    }
  }

  return count;
}
