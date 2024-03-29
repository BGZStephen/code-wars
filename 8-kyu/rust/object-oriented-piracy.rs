// Ahoy matey!

// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.

// Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?

// You begin with writing a generic Ship class / struct:

// struct Ship {
//   draft: u32,
//   crew: u32,
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
//   let titanic = Ship {
//       draft : 15,
//       crew : 10,
//   };
// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

// Add the method

// is_worth_it(&self)
// to decide if the ship is worthy to loot. For example:

// titanic.is_worth_it() -> false
// This Kata teaches you the very basic of method creation.

// Good luck!

struct Ship {
  draft: u32,
  crew: u32,
}

impl Ship {
  fn is_worth_it(&self) -> bool {
    return self.draft as f32 - (self.crew as f32 * 1.5) > 20 as f32;
  } 
}