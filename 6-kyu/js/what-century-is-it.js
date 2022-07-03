// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year) {
  const century = Math.ceil(parseInt(year) / 100);

  if (String(century).endsWith("0")) {
    return `${century}th`;
  }

  if (
    (String(century).endsWith("2") || String(century).endsWith("1")) &&
    String(century).startsWith("1")
  ) {
    return `${century}th`;
  }

  if (String(century).endsWith("3") && String(century).startsWith("1")) {
    return `${century}th`;
  }

  if (String(century).endsWith("1")) {
    return `${century}st`;
  }

  if (String(century).endsWith("2")) {
    return `${century}nd`;
  }

  return `${century}rd`;
}

console.log(whatCentury("1999"));
console.log(whatCentury("2011"));
console.log(whatCentury("2154"));
console.log(whatCentury("2259"));
console.log(whatCentury("1124"));
console.log(whatCentury("2000"));
