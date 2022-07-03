// For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map in Java).
//
// For example:
//
// var water = 'H2O';
// parseMolecule(water); // return {H: 2, O: 1}
//
// var magnesiumHydroxide = 'Mg(OH)2';
// parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}
//
// var fremySalt = 'K4[ON(SO3)2]2';
// parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
// As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.
//
// Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.

function parseMolecule(formula) {
  const formulaComponents = {};

  const startSeparators = ['[', '{', '('];
  const endSeparators = ['[', '{', '('];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  const splitFormula = formula.split(/([A-Z]+[a-z]{1}|[A-Z]{1}|\(\)\{\}\[\]|[0-9]{1,})/g)

  for (let i = 0; i < splitFormula.length; i++) {
    if (startSeparators.indexOf(splitFormula[i]) > -1) {
      let endIndex = 1;
      // find the end of the sub formula
      while (startSeparators.indexOf(splitFormula[endIndex] === -1)) {
        endIndex += 1;
      }

      // check if there is a number after a closing bracket, if so, use as multiplier
      let numberIndex = endIndex + 1;
      while (startSeparators.indexOf(numbers[numbers] > -1)) {

      }
      // check if next items are numbers, if so, multiply
    }
  }
}

function calculateIntermetdiate(intermediate) {}

parseMolecule('H2O');
