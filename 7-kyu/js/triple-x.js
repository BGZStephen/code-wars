// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// tripleX("abraxxxas") → true
// tripleX("xoxotrololololololoxxx") → false
// tripleX("softX kitty, warm kitty, xxxxx") → true
// tripleX("softx kitty, warm kitty, xxxxx") → false
// Note :

// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false

function tripleX(str){
  const chars = str.split('')
  for (let i = 0; chars.length; i++) {
    if (chars[i] === 'x' && chars[i + 1] !== 'x' && chars[i + 2] !== 'x') {
      return false
    }

    if (chars[i] === 'x' && chars[i + 1] === 'x' && chars[i + 2] === 'x') {
      return true
    }
  }

  return false
}