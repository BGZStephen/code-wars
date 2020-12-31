# Given an array of integers.
# Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
# If the input array is empty or null, return an empty array. */

def countPositivesSumNegatives(input):
  if (not input or len(input) == 0):
    return []

  positive = 0;
  negative = 0

  for number in input:
    if (number > 0):
      positive += 1
    else:
      negative += number;

  return [positive, negative]

print(countPositivesSumNegatives([]))
print(countPositivesSumNegatives([1, 2, 3]))
print(countPositivesSumNegatives([1, 2, 3, -1, -2, -3]))