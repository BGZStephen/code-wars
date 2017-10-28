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
  const timeDurations = {
    YEAR: 31536000,
    DAY: 86400,
    HOUR: 3600,
    MINUTE: 60,
    SECOND: 1,
  }

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

  Object.keys(timeDurations).forEach(function(key) {
    while (seconds - timeDurations[key] >= 0) {
      seconds -= timeDurations[key]
      timeQuantities[key.toLowerCase()] += 1;
    }
  })

  Object.keys(timeQuantities).forEach(function(key) {
    if(timeQuantities[key] > 0) {
      outputValues.push(timeQuantities[key] > 1 ? `${timeQuantities[key]} ${key}s` : `${timeQuantities[key]} ${key}`)
    }
  })

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
