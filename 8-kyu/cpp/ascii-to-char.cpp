// Get character from ASCII Value
// Write a function getChar/GetChar/get_char which takes a number and returns the corresponding ASCII char for that value.

char ascii_to_char(int ascii) {
  return char(ascii);
}

int main(){
  if (ascii_to_char(97) != "a"[0]) {
    return 1;
  }
  
  return 0;
}