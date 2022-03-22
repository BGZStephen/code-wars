// There's a waiting room with N chairs set in single row. Chairs are consecutively numbered from 1 to N. First is closest to the entrance (which is exit as well).

// For some reason people choose a chair in the following way

// Find a place as far from other people as possible
// Find a place as close to exit as possible
// All chairs must be occupied before the first person will be served

// So it looks like this for 10 chairs and 10 patients

// Chairs	1	2	3	4	5	6	7	8	9	10
// Patients	1	7	5	8	3	9	4	6	10	2
// Your task is to find last patient's chair's number.

// Input - N - integer greater than 2 - number of chairs. Output should positive integer too - last patient's chair's number

// Have fun :)

function lastChair(numberOfChairs){
  let chairs = new Array(numberOfChairs).fill(null, 0, numberOfChairs)
  chairs[0] = 1;

  for (let i = 2; i <= numberOfChairs; i++) {
    const nextPositionToOccupy = determineNextPosition(chairs)
    chairs[nextPositionToOccupy] = i;
  }

  return chairs.indexOf(numberOfChairs) + 1
}

function determineNextPosition(chairs) {
  let temporaryLargestGap = 0;
  let largestGap = 0;
  let position = 0;

  for (const [index, chair] of chairs.entries()) {
    if (!chair) {
      temporaryLargestGap += 1;
    }

    if (chair) {
      if (largestGap < temporaryLargestGap) {
        largestGap = temporaryLargestGap
      }

      position = index - largestGap;
      temporaryLargestGap = 0;
    }

    if (index === chairs.length -1 && largestGap < temporaryLargestGap) {
      position = index;
      largestGap = temporaryLargestGap;
    }
  }

  return position;
}

function test() {
  let failingTests = false;
  const test1Res = lastChair(10);

  if (test1Res !== 9) {
    console.log(`Expected ${9}, got ${test1Res}`)
  }

  if (failingTests) {
    process.exit(1)
  }

  process.exit(0)
}

test()