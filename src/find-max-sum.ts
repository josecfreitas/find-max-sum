export function findMaxSum(values: number[]) {
  if (values.length < 2) return 0;

  let maxValue = Number.MIN_VALUE;
  let secondMaxValue = Number.MIN_VALUE;

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
