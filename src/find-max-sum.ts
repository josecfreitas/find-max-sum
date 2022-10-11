export function findMaxSum(values: number[]) {
  if (values.length < 2) return 0;

  let maxValue = Number.NEGATIVE_INFINITY;
  let secondMaxValue = Number.NEGATIVE_INFINITY;

  for (const value of values) {
    if (secondMaxValue < value) {
      secondMaxValue = value;

      if (maxValue < value) {
        secondMaxValue = maxValue;
        maxValue = value;
      }
    }
  }

  return maxValue + secondMaxValue;
}
