/*

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

  formatDuration(62)    // returns "1 minute and 2 seconds"
  formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
Note that spaces are important.

Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

*/


function formatDuration (seconds) {
  const SECOND = 1
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const YEAR = DAY * 365;

  let timeQuantities = {
    year: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  }

  let outputValues = [];
  let outputString = '';

  if (seconds <= 0) {
    return 'now';
  }

  while (seconds - YEAR >= 0) {
    seconds -= YEAR
    timeQuantities.year += 1;
  }

  while (seconds - DAY >= 0) {
    seconds -= DAY
    timeQuantities.day += 1;
  }

  while (seconds - HOUR >= 0) {
    seconds -= HOUR
    timeQuantities.hour += 1;
  }

  while (seconds - MINUTE >= 0) {
    seconds -= MINUTE
    timeQuantities.minute += 1;
  }

  while (seconds - SECOND >= 0) {
    seconds -= SECOND
    timeQuantities.second += 1;
  }

  Object.keys(timeQuantities).forEach(function(key) {
    if(timeQuantities[key] > 0) {
      outputValues.push(timeQuantities[key] > 1 ? `${timeQuantities[key]} ${key}s` : `${timeQuantities[key]} ${key}`)
    }
  })

  // if (y > 0) {
  //   outputValues.push(y > 1 ? `${y} years` : `${y} year`)
  // }
  //
  // if (d > 0) {
  //   outputValues.push(d > 1 ? `${d} days` : `${d} day`)
  // }
  //
  // if (h > 0) {
  //   outputValues.push(h > 1 ? `${h} hours` : `${h} hour`)
  // }
  //
  // if (m > 0) {
  //   outputValues.push(m > 1 ? `${m} minutes` : `${m} minute`)
  // }
  //
  // if (s > 0) {
  //   outputValues.push(s > 1 ? `${s} seconds` : `${s} second`)
  // }

  for (let i = 0; i < outputValues.length; i++) {
    if (i < outputValues.length - 2) {
      outputString += `${outputValues[i]}, `
    } else if (i < outputValues.length -1) {
      outputString += `${outputValues[i]} and `
    } else {
      outputString += `${outputValues[i]}`
    }

  }

  console.log(outputString);
}

formatDuration(3662)
