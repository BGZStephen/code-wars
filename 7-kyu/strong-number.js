// Definition
// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example: 145, since
// 1! + 4! + 5! = 1 + 24 + 120 = 145
// So, 145 is a Strong number.

// Task
// Given a number, Find if it is Strong or not.

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive.
// Return the result as String
// Input >> Output Examples
// strong_num(1) ==> return "STRONG!!!!"
// Explanation:
// Since , the sum of its digits' factorial of (1) is equal to number itself (1) , Then its a Strong .

// strong_num(123) ==> return "Not Strong !!"
// Explanation:
// Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself (123) , Then it's Not Strong .

// strong_num(2)  ==>  return "STRONG!!!!"
// Explanation:
// Since the sum of its digits' factorial of 2! = 2 is equal to number itself (2) , Then its a Strong .

// strong_num(150) ==> return "Not Strong !!"
// Explanation:
// Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself (150), Then it's Not Strong .

function strong(n) {
  let isStrong = false;

  let factorial = 0;

  for (const number of String(n).split('').map(s => parseInt(s))) {
    let incrementBy = 1;

    for (let i = 1; i <= number; i++) {
      incrementBy *= i
    }

    factorial += incrementBy;
  }

  if (factorial === n) {
    isStrong = true;
  }

  return isStrong ? "STRONG!!!!" : "Not Strong !!";
}