// Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
// Task:
// Your job for today is to finish the starSign function by finding the astrological sign, given the birth details as a Date object.
// Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:

// Aquarius ------ 21 January - 19 February
// Pisces --------- 20 February - 20 March
// Aries ---------- 21 March - 20 April
// Taurus -------- 21 April - 21 May
// Gemini -------- 22 May - 21 June
// Cancer -------- 22 June - 22 July
// Leo ------------- 23 July - 23 August
// Virgo ----------- 24 August - 23 September
// Libra ----------- 24 September - 23 October
// Scorpio -------- 24 October - 22 November
// Sagittarius ---- 23 November - 21 December
// Capricorn ----- 22 December - 20 January

function starSign(date) {
  const signs = {
    "Aquarius": {
      startDate: new Date("2000-01-21"),
      endDate: new Date("2000-02-19T23:59:59"),
    },
    "Pisces": {
      startDate: new Date("2000-02-20"),
      endDate: new Date("2000-03-20T23:59:59"),
    },
    "Aries": {
      startDate: new Date("2000-03-21"),
      endDate: new Date("2000-04-20T23:59:59"),
    },
    "Taurus": {
      startDate: new Date("2000-04-21"),
      endDate: new Date("2000-05-21T23:59:59"),
    },
    "Gemini": {
      startDate: new Date("2000-05-22"),
      endDate: new Date("2000-06-21T23:59:59"),
    },
    "Cancer": {
      startDate: new Date("2000-06-22"),
      endDate: new Date("2000-07-22T23:59:59"),
    },
    "Leo": {
      startDate: new Date("2000-07-23"),
      endDate: new Date("2000-08-23T23:59:59"),
    },
    "Virgo": {
      startDate: new Date("2000-08-24"),
      endDate: new Date("2000-09-23T23:59:59"),
    },
    "Libra": {
      startDate: new Date("2000-09-24"),
      endDate: new Date("2000-10-23T23:59:59"),
    },
    "Scorpio": {
      startDate: new Date("2000-10-24"),
      endDate: new Date("2000-11-22T23:59:59"),
    },
    "Sagittarius": {
      startDate: new Date("2000-11-23"),
      endDate: new Date("2000-12-21T23:59:59"),
    }
  }

  date.setFullYear(2000)

  for (const starSign of Object.keys(signs)) {
    if (date <= signs[starSign].endDate && date >= signs[starSign].startDate) {
      return starSign
    }
  }

  return "Capricorn"
}

console.log(starSign(new Date("2001-02-19T08:11:34.602Z")))