import Calculator from "./Calculator";

describe("Calculator", () => {
  it("should add two numbers", () => {
    let calc = new Calculator(4, 5);
    expect(calc.add()).to.equal(9);
  });

  it("should multiply two numbers", () => {
  });

  it("should subtract two numbers", () => {
  });

  it("should divide two numbers", () => {
  });

})
