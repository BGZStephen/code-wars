// Happy Year is the year with only distinct digits , (e.g) 2018

// Given a year, find the next happy year

function nextHappyYear(year){
  year += 1;
  while (!isHappyYear(year)) year += 1;
  return year;
}

function isHappyYear(year) {
  const chars = String(year).split('').sort();

  for (let i = 0; i < chars.length; i += 1) {
    if ((i + 1) === chars.length) {
      return true;
    }

    if (chars[i] === chars[i + 1]) {
      return false;
    }
  }
}