bool isDivideBy(int number, int a, int b)
{
  if (number % a != 0 || number % b != 0) { 
    return false;
  }
  
  return true;
}