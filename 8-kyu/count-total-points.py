# /* Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the array.

# For example: ["3:1", "2:2", "0:1", ...]

# Write a function that takes such list and counts the points of our team in the championship. Rules for counting points for each match:
# if x>y - 3 points
# if x<y - 0 point
# if x=y - 1 point */

def calculatePoints(games):
  points = 0

  for game in games:
    home = game[0];
    away = game[2]

    if (home > away):
      points += 3;

    if (home == away):
      points += 1;

  return points

print(calculatePoints(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
print(calculatePoints(["0:0","0:0","0:0"]))
print(calculatePoints(["0:1","1:0","0:0"]))
