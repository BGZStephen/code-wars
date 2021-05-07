// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(4, 4) --> 16
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

int area_or_perimeter(int length, int width) {
  if (length == width) {
    return length * width;
  }

  return (width * 2) + (length * 2);
}

int main() {
  if (area_or_perimeter(4, 4) != 16) {
    return 1;
  }

  if (area_or_perimeter(6, 10) != 32) {
    return 1;
  }

  return 0;
};