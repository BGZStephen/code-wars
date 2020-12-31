// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
  if (num < 0) {
     num = -num;
  }

  if (Number.isNaN(num)) {
    return 'NaN';
  }
  
  const arrayOfNumbers = String(num).split('');

  const res = [];

  for (const [index, number] of arrayOfNumbers.entries()) {
    const isOddNumber = parseInt(number) % 2 !== 0;
    const addStartingDash = index !== 0 && isOddNumber && res[res.length - 1] !==  '-';
    const addEndingDash = index !== (arrayOfNumbers.length - 1) && isOddNumber;

    res.push(addStartingDash ? '-' : '', number, addEndingDash ? '-' : '')
  }

  return res.join('');
}