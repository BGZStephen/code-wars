// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

export function bmi(weight: number, height: number): string {
  const val = weight / Math.pow(height, 2);

  if (val < 18.5) {
    return "Underweight";
  }

  if (val < 25) {
    return "Normal";
  }

  if (val < 30) {
    return "Overweight";
  }

  return "Obese";
}
