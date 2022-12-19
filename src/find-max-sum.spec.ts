import { findMaxSum } from "./find-max-sum";
import { generateNumbersArray } from "./generate-numbers-array";

describe("findMaxSum", () => {
  it("should find the max sum", () => {
    const maxSum = findMaxSum([1, 2, 3, 4, 5]);
    expect(maxSum).toEqual(4 + 5);
  });

  it("should find the max sum for duplicated max numbers", () => {
    const maxSum = findMaxSum([1, 2, 3, 4, 5, 6, 5, 6, 5, 6]);
    expect(maxSum).toEqual(6 + 6);
  });

  it("should work with negative numbers", () => {
    const maxSum = findMaxSum([-1, -2, -3, -4, -5]);
    expect(maxSum).toEqual(-1 + -2);
  });

  it("should work with mixed negative and positive numbers", () => {
    const maxSum = findMaxSum([-1, -2, -3, -4, 5]);
    expect(maxSum).toEqual(-1 + 5);
  });

  it("should throw an error if array length is 0", () => {
    expect(() => findMaxSum([])).toThrow()
  });

  it("should throw an error if array length is 1", () => {
    expect(() => findMaxSum([1])).toThrow()
  });

  it("performance should be considered", () => {
    const bigArrayOfNumbers = generateNumbersArray();
    const startedAt = performance.now();
    expect(() => findMaxSum(bigArrayOfNumbers)).not.toThrow();
    const endedAt = performance.now();
    expect(endedAt - startedAt).toBeLessThanOrEqual(1000);
  });
});
