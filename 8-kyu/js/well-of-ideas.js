// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  let goodCount = 0;
  let badCount = 0;
  
  for (const idea of x) {
    if (idea === "good") {
      goodCount += 1;
    } else {
      badCount += 1;
    }
  }
  
  if (goodCount === 0) {
    return "Fail!"
  }
  
  if (goodCount <= 2) {
    return "Publish!"
  }
  
  return "I smell a series!"
}