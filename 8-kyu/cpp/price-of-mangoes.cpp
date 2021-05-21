int mango(int quantity, int price) {
    int res = 0;
  
    for (int i = 1; i <= quantity; i++) {
      if (i % 3 != 0) {
        res += price;
      }
    }
  
  return res;
}