# Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

# If n == 0 return an empty sequence []

# Examples
# arr = ['a', 'b', 'c', 'd', 'e']
# first(arr)    # --> ['a']
# first(arr, 2) # --> ['a', 'b']
# first(arr, 3) # --> ['a', 'b', 'c']
# first(arr, 0) # --> []

def first(seq, n = 1):
    if (n is None or n >= len(seq)):
        return seq

    if (n <= 0):
        return []

    return seq[0:n]
  
print(first(['a', 'b', 'c'], 3))
print(first(['a', 'b', 'c'], 0))
print(first(['a', 'b', 'c'], 100))