// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  while(s.match(/[^#]#/)) {
    s = s.replace(/[^#]#/g, '')
  }

  s = s.replace(/#/g, '')

  return s
};

console.log(cleanString("abc#d##c"))
console.log(cleanString("abc##d######"))

