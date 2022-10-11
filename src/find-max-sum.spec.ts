import { findMaxSum } from "./find-max-sum";

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
    console.log([-1, -2, -3, -4, -5]);
    const maxSum = findMaxSum([-1, -2, -3, -4, -5]);
    expect(maxSum).toEqual(-1 + -2);
  });

  it("should work with mixed negative and positive numbers", () => {
    const maxSum = findMaxSum([-1, -2, -3, -4, 5]);
    expect(maxSum).toEqual(-1 + 5);
  });

  it("should return 0 if array length is 0", () => {
    const maxSum = findMaxSum([]);
    expect(maxSum).toEqual(0);
  });

  it("should return 0 if array length is 0", () => {
    const maxSum = findMaxSum([1]);
    expect(maxSum).toEqual(0);
  });
});
