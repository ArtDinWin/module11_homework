import { revertString } from "../utils/revertString.js";

describe("test for returns the inverted string", () => {
  const string = "abc";
  const camelCase = "Hello World";
  const number = 123;
  const nothing = "";
  const arr = [1, 2, 3];

  it("should operate correctly with string, camelCase", () => {
    expect(revertString(string)).toBe(`cba`);
    expect(revertString(camelCase)).toBe(`dlroW olleH`);
  });

  it("false for number, nothing and array", () => {
    // expect(revertString(number)).toBe(`321`); // падение теста
    expect(revertString(number)).toBeFalsy();
    expect(revertString(nothing)).toBeFalsy();
    expect(revertString(arr)).toBeFalsy();
  });
});
