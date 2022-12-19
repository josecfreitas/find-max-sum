export function generateNumbersArray(length: number = 110000000): number[] {
  const array: number[] = [];
  for (let i = 0; i < length; i++) {
    array.push(i);
  }
  return array;
}