// Create a function that tells the user how to get around Midtown in Manhattan. The function should be able to help the user to get from one location in this area to another.

// Streets run east-west. Street numbers increase as they move northward, from 1st street in Greenwich Village to 220th street in the Inwood section. Avenues run south-north, with numbers beginning on the east side of the island and increase to the west.

// "The Encyclopedia of New York City" defines Midtown as extending from 34th Street to 59th Street (going northwards) and from 3rd Avenue to 8th Avenue (going westwards).

// For example:

// midtownNav("8th Ave and W 38th St", "7th Ave and W 36th St");
// The code above should tell the user how to get from 8th Ave and W 38th St to 7th Ave and W 36th St. It should then output as a string how many blocks north/south, and then how many blocks east/west the user should travel.

// midtownNav("8th Ave and W 38th St", "7th Ave and W 36th St") // output => "Walk 2 blocks south, and 1 block east"
// midtownNav("5th Ave and W 46th St", "7th Ave and E 58th St") // output => "Walk 12 blocks north, and 2 blocks west"
// Note: When the avenues are same, the direction of movement should be west and when the streets are same the direction should be north.

function midtownNav(start,end) {
  const startAvenue = start.match(/^[0-9]{0,3}/)[0]
  const endAvenue = end.match(/^[0-9]{0,3}/)[0]

  const startStreet = start.match(/[EW] [0-9]{0,3}/)[0].replace(/[EW] /, '')
  const endStreet = end.match(/[EW] [0-9]{0,3}/)[0].replace(/[EW] /, '')

  const northOrSouth  = endStreet >= startStreet ? 'north' : 'south'
  const westOrEast = endAvenue >= startAvenue ? 'west' : 'east'

  const blocksHorizontal = startAvenue > endAvenue ? startAvenue - endAvenue : endAvenue - startAvenue
  const blocksVertical = startStreet > endStreet ? startStreet - endStreet : endStreet - startStreet
  
  return `Walk ${blocksVertical} blocks ${northOrSouth}, and ${blocksHorizontal} blocks ${westOrEast}`
}

// console.log(midtownNav("8th Ave and W 38th St", "7th Ave and W 36th St"))
// console.log(midtownNav("5th Ave and W 46th St", "7th Ave and E 58th St"))
console.log(midtownNav("5th Ave and W 45th St", "6th Ave and W 40th St"))
