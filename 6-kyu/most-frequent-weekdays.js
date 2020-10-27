// What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

// You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

// Input: Year as an int.

// Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

// Preconditions:

// Week starts on Monday.
// Year is between 1583 and 4000.
// Calendar is Gregorian.
// Example:

// mostFrequentDays(2427) => ['Friday']
// mostFrequentDays(2185) => ['Saturday']
// mostFrequentDays(2860) => ['Thursday', 'Friday']

function mostFrequentDays(year){
  let res = [];
  let highestCount = 0;
  const date = new Date(`01-01-${year}`)

  const count = {
    'Monday': 0,
    'Tuesday': 0,
    'Wednesday': 0,
    'Thursday': 0,
    'Friday': 0,
    'Saturday': 0,
    'Sunday': 0
  }

  const dateMap = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  }

  while (date.getFullYear() === year) {
    count[dateMap[date.getUTCDay()]] += 1
    date.setDate(date.getDate() + 1)
  }
  
  for (const key of Object.keys(count)) {
    if (count[key] === highestCount) {
      res.push(key)
    }

    if (count[key] > highestCount) {
      res = [key];
      highestCount = count[key]
    }
  }

  return res;
}

console.log(mostFrequentDays(2860))