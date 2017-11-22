/*

Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

Note that for simplicity you may assume that there are always spaces between numbers and operations, e.g. 1 3 + expression is valid, but 1 3+ isn't.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).

*/

function calc(expr) {
  if (!expr) {
    return 0;
  }

  const operators = [
    '/',
    '*',
    '+',
    '-'
  ]
  let operatorPresence = false;

  expr = expr.split(" ");
  operators.forEach(function (operator) {
    if (expr.indexOf(operator) !== -1) {
      operatorPresence = true;
    }
  })

  if (!operatorPresence) {
    expr.sort(function (a, b) {
      return a < b
    })
    return parseFloat(expr[0])
  }

  let answer = 0

  for(let i = 0; i < expr.length; i++) {
    operators.forEach(function (operator) {
      if (expr[i] === operator) {
        answer += expr[i] operator expr[i -1];
      }
    })
  }
}

calc("4 2 /");
