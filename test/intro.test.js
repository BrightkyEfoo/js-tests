import { describe, test, it, expect } from "vitest";
import { calculateAverage, factorial, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("it should return the first argument if it is greater than the second", () => {
    expect(max(2, 1)).toBe(2);
  });
  it("it should retruns the second argument if it is greater than the first", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("it should return the first argument if both arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
  it("it should throw illegalArgument error", () => {
    expect(() => max("a", 1)).toThrow();
  });
});

describe("fizzbuzz", () => {
  it('it should retuer "Fizz" if the number is only divisible by 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(4)).not.toBe("Fizz");
  });

  it('it should return "Buzz" if the number is only divisible by 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(6)).not.toBe("Buzz");
  });

  it('it should return "FizzBuzz" if the number is divisble by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(15)).not.toBe("Fizz");
    expect(fizzBuzz(15)).not.toBe("Buzz");
  });
});

describe("calculateAverage", () => {
  it("it should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it("it should return the average of numbers in an array", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });

  it("it should return NaN if any member of array isNaN", () => {
    expect(calculateAverage([1, 2, "3"])).toBe(NaN);
  });

  it("it should return the only element of a given array that has only that element", () => {
    expect(calculateAverage([1])).toBe(1);
  });
});

describe("Calculate the factoriel of a number", () => {
  it("it sloud return the factorial of a given whole number", () => {
    expect(factorial(3)).toBe(6);
    expect(factorial(5)).toBe(120);
  });
  it("it should return NaN if given a negative number", () => {
    expect(factorial(-1)).toBe(NaN);
  });
  it("it should return 1 if given 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("it should return NaN if the given number is not an integer", () => {
    expect(factorial(2.5)).toBe(NaN);
    expect(factorial("1")).toBe(NaN);
  });
});
