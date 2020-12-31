// Intro:
// I was doing a coding challenge. It was one of those multi-step challenges. I don't know if my approach was good or bad, but in one of these steps I was writing a function to convert word to numbers. I did it.. eventually, but... I didn't like how it was written. So I thought why not create kata and check how other people do it :) So:

// Task:
// Your task is to write the word to number converter. Digits in the number should match letters in the word. Plus generated number should be the smallest possible number you can get.

// Words will contain of maximum 10 distinct letters, but word can be any length, even longer than 10 characters long.
// Number can NOT start with 0
// Same letters share the same digit regardless of case
// For empty string return 0
// Examples:
// "A" -> 1 - OK

// "ABA" -> 353 - WRONG ( number is OK, but it's not the smallest number )

// "ABA" -> 333 - WRONG ( different letters map to same digits )

// "ABA" -> 357 - WRONG ( same letters map to different digits )

function convert(s) {
  if (!s || s.length === 0) {
    return 0;
  }
  
  let res = ``;
  
  const uniqueCharacters = {
    [s[0].toLowerCase()]: {
      value: 1,
    }
  };

  const remainingValues = [0, 2, 3, 4, 5, 6, 7, 8, 9];

  for (const char of s.split('').filter(char => char)) {
    if (!uniqueCharacters[char.toLowerCase()]) {
      const minValue = Math.min.apply(Math, remainingValues)
      uniqueCharacters[char.toLowerCase()] = {
        value: minValue
      }

      remainingValues.splice(remainingValues.indexOf(minValue), 1)
      res += `${minValue}`
    } else {
      res += `${uniqueCharacters[char.toLowerCase()].value}`
    }
  }

  const resNumber = parseInt(res);

  return Number.isNaN(resNumber) ? 0 : resNumber;
}