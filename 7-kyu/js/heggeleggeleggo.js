function heggeleggleggo(word){
  let res = "";
  
  for (const letter of word) {
    if (!["a", "e", "i", "o", "u", " "].includes(letter.toLowerCase())) {
      res += `${letter}egg`
      continue;
    }
    
    res += letter;
  }
  
  return res;
}