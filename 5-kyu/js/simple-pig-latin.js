/*

Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

*/

function pigIt(str) {
  const strArray = str.split(" ");
  pigLatinArray = [];

  strArray.forEach(function (string) {
    let firstLetter = string[0];
    string += `${firstLetter}ay`;
    string = string.slice(1, string.length);
    pigLatinArray.push(string);
  });

  return pigLatinArray.join(", ").replace(/,/g, "");
}

pigIt("This is my string");
