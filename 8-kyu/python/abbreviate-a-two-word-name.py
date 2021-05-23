# Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

# The output should be two capital letters with a dot separating them.

# It should look like this:

# Sam Harris => S.H

# Patrick Feeney => P.F

def abbrev_name(name):
    split_name = name.split(" ")
    first_initial = split_name[0][0].upper()
    last_initial = split_name[1][0].upper()

    return f"{first_initial}.{last_initial}"