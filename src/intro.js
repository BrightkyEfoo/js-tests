// Lesson: Writing your first tests
export function max(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new IllegalArgumentError("Arguments must be numbers");
  }
  if (a > b) return a;
  else if (b > a) return b;
  return a;
}

export class IllegalArgumentError extends Error {
  constructor(message) {
    super(message);
    // this.name = "illegalArgumentError";
    IllegalArgumentError.prototype = {
      ...this,
      ...Object.create(Error.prototype),
    };
  }
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

export const calculateAverage = (arr) => {
  if (!arr.length) return NaN;
  if (arr.some((val) => typeof val !== "number")) return NaN;
  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
};

export const factorial = (n) => {
  if (typeof n !== "number") return NaN;

  return n < 0 ? NaN : n === 0 ? 1 : n * factorial(n - 1);
};
