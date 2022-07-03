// Your task is to remove all consecutive duplicate words from string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = (s) => {
  const res = [];

  for (const string of s.split(" ")) {
    if (res[res.length - 1] !== string) {
      res.push(string);
    }
  }

  return res.join(" ");
};
