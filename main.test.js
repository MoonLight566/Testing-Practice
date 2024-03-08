import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./main";
test("capitalize first character of string", () => {
  expect(capitalize("from")).toMatch("From");
});
test("reverses string", () => {
  expect(reverseString("reverse")).toMatch("esrever");
});
test("calculator addition", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("calculator subtraction", () => {
  expect(calculator.subtract(7, 3)).toBe(4);
});
test("calculator divide", () => {
  expect(calculator.divide(9, 3)).toBe(3);
});
test("calculator multiply", () => {
  expect(calculator.multiply(10, 3)).toBe(30);
});
test("caesarCipher", () => {
  expect(caesarCipher("please encrypt me", 3)).toMatch("sohdvh hqfubsw ph");
});
test("caesarCipher", () => {
  expect(caesarCipher("z", 1)).toMatch("a");
});
test("caesarCipher", () => {
  expect(caesarCipher("Please encrypt me", 3)).toMatch("Sohdvh hqfubsw ph");
});
test("caesarCipher", () => {
  expect(caesarCipher("please encrypt me?!", 3)).toMatch("sohdvh hqfubsw ph?!");
});
test("analyzeArray average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});
test("analyzeArray min", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});
test("analyzeArray max", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});
test("analyzeArray length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
