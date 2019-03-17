# Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.
# When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

def next_item(unknown_type, item):
  known_list = list(unknown_type)
  for index, value in enumerate(known_list):
    if (value == item and index < len(known_list) - 1):
      return(known_list[index + 1])

print(next_item([1, 2, 3, 4, 5, 6, 7, 8], 5))
print(next_item(['a', 'b', 'c'], 'd'))
print(next_item(['a', 'b', 'c'], 'c'))
print(next_item('testing', 't'))
print(next_item(iter(range(1, 30000)), 12))