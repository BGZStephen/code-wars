// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

const permutations = (string) => {
  if (!string || typeof string !== "string") {
    return []
  } else if (string.length < 2 ){
    return [string]
  }

  const permutationsArray = [] 
   
  for (let i = 0; i < string.length; i++){
    let char = string[i]

    if (string.indexOf(char) !== i) 
    continue

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of permutations(remainingChars)){
      permutationsArray.push(char + permutation) 
    }
  }

  return permutationsArray
}