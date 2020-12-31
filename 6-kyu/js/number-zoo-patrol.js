// Background:
// You're working in a number zoo, and it seems that one of the numbers has gone missing!

// Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.

// In case the zoo loses another number, they want your program to work regardless of how many numbers there are in total.

// Task:
// Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). Return this missing number.

// Note: huge lists will be tested.

// Examples:
// [1, 3, 4]  =>  2
// [1, 2, 3]  =>  4
// [4, 2, 3]  =>  1

function findNumber(array) {
  array = array.sort((a, b) => a - b);

  if (!array || array.length === 0) { 
    return 1
  }

  for (let i = 0; i < array.length; i++) {
    if (i === 0 && array[0] !== 1) {
      return 1
    }

    if (array[i] + 1 !== array[i + 1]) {
      return array[i] + 1;
    }
  }
}