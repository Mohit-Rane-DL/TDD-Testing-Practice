const calculator = require("./calculator");

test("Basic Calculator", ()=>{
    expect(calculator.add(2, 5)).toBe(7);
    expect(calculator.subtract(5, 4)).toBe(1);
    expect(calculator.multiply(7, 3)).toBe(21);
    expect(calculator.divide(100, 10)).toBe(10);
});