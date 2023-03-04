const mathOperations = require("../src/calculator");

describe("Calculator Tests", () => {
  test("Addition of 2 numbers", () => {
    // arrange and act
    var result = mathOperations.sum(1, 2);

    // assert
    expect(result).toBe(3);
  });

  test("Subtraction of 2 numbers", () => {
    // arrange and act
    var result = mathOperations.diff(10, 2);

    // assert
    expect(result).toBe(8);
  });

  test("Multiplication of 2 numbers", () => {
    // arrange and act
    var result = mathOperations.product(2, 8, 4);

    // assert
    expect(result).toBe(64);
  });

  test("Division of 2 numbers", () => {
    // arrange and act
    var result = mathOperations.divide(24, 8);

    // assert
    expect(result).toBe(3);
  });
  test("Display Hello", () => {
    var result = mathOperations.printName("Isaiah")

    // assert
    expect(result).toBe("My name is Isaiah");
  });
});
