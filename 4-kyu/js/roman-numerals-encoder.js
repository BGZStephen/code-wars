/*

Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
0         1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

*/

function solution(number) {
  let romanNumber = [];

  const numerals = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]];

  let numberToConvert = number.toString().split("");
  while (numberToConvert.length > 0) {
    if (numberToConvert.length >= 4) {
      for (let j = 0; j < numberToConvert[0]; j++) {
        romanNumber.push("M");
      }
    } else if (
      parseInt(numberToConvert[0]) > 0 &&
      parseInt(numberToConvert[0]) <= 3
    ) {
      for (let j = 0; j < parseInt(numberToConvert[0]); j++) {
        romanNumber.push(numerals[numberToConvert.length - 1][0]);
      }
    } else if (parseInt(numberToConvert[0]) === 4) {
      romanNumber.push(numerals[numberToConvert.length - 1][0]);
      romanNumber.push(numerals[numberToConvert.length - 1][1]);
    } else if (parseInt(numberToConvert[0]) === 5) {
      romanNumber.push(numerals[numberToConvert.length - 1][1]);
    } else if (parseInt(numberToConvert[0]) > 5 && numberToConvert[0] <= 8) {
      romanNumber.push(numerals[numberToConvert.length - 1][1]);
      for (let j = 0; j < parseInt(numberToConvert[0]) - 5; j++) {
        romanNumber.push(numerals[numberToConvert.length - 1][0]);
      }
    } else if (parseInt(numberToConvert[0]) === 9) {
      romanNumber.push(numerals[numberToConvert.length - 1][0]);
      romanNumber.push(numerals[numberToConvert.length][0]);
    }
    numberToConvert.shift();
  }
  return romanNumber.join().replace(/,/gi, "");
}

solution(2008);
