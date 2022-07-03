// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable(size) {
  const res = [];
  for (let i = 1; i <= size; i++) {
    res.push([i]);
  }

  for (let i = 0; i < res.length; i++) {
    for (let j = 2; j <= size; j++) {
      res[i].push(j * res[i][0]);
    }
  }

  return res;
}
