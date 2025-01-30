function caffeineBuzz(n){
  const isEven = n % 2 === 0;
  
  if (n % 3 === 0 && n % 4 === 0) {
    return `Coffee${isEven ? 'Script' : ''}`
  }
  
  if (n % 3 === 0) {
    return `Java${isEven ? 'Script' : ''}`
  }
  
  return 'mocha_missing!'
}