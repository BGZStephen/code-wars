# A Discovery
# While turning through the fields one fine day with his favorite rotary plough, farmer Arepo struck upon something quite odd: a square stone tablet with strange symbols carved into it... he knew some such objects could portray the same message in four different directions all at once, so he wisely kept it for later examination and dutifully resumed working the rich soil. As he wheeled on, he found more such tablets, but with so many crops to sow, he had no time for deciphering their many glyphs.

# Your Task
# Please help Arepo by reading each tablet to discern whether or not it is a Sator Square!

# The Square . . .
# is known as a two-dimentional palindrome observing four symmetries

# can be read:

# top-to-bottom
# bottom-to-top
# left-to-right
# right-to-left
# can be rotated 180 degrees and still be read in all four ways

# may contain similar looking characters that are different, so be careful

# is shown here illustrates how you can read the word "TUBA" in four different directions...

#           v
#       B A T S
#       A B U T <
#     > T U B A        
#       S T A B
#         ^
# ...where every word in the square can be thus read!

# Input
# tablet  #  a 2D char list (2 <= n <= 33)
# Output
# True / False  #  whether or not the tablet is a sator square

import copy

def is_sator_square(tablet):
    starting_tablet = copy.deepcopy(tablet)
    result_tablet = copy.deepcopy(tablet)
    result_tablet.reverse()

    for arr in result_tablet:
      arr.reverse()

    return (result_tablet == starting_tablet)

def tests():
  print (is_sator_square([['P', 'E', 'R'], ['E', 'V', 'E'], ['R', 'E', 'P']]) == True)
  print (is_sator_square([['K', 'N', 'I', 'T'], ['N', 'O', 'R', 'I'], ['I', 'R', '0', 'N'], ['T', 'I', 'N', 'K']]) == False)
  print (is_sator_square([['S', 'A', 'T', 'O', 'R'], ['A', 'R', 'E', 'P', 'O'], ['T', 'E', 'N', 'E', 'T'], ['O', 'P', 'E', 'R', 'A'], ['R', 'O', 'T', 'A', 'S']]) == True)

tests()