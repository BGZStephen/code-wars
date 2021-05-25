# Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

# Indices in sequence start from 0.

# If the sequence is empty, you should return 0.

import functools

def even_last(numbers): 
    if (len(numbers) is 0):
        return 0
    
    last_index = numbers[-1:][0]
    even_sum = functools.reduce(lambda a, b : a + b, numbers[::2])
    
    return even_sum * last_index