import Calculator from "./Calculator";

describe("Calculator", () => {
  it("should add two numbers", () => {
    let calc = new Calculator(4, 5);
    expect(calc.add()).to.equal(9);
  })
})
