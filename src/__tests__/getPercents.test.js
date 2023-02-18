import { getPercents } from "../utils/getPercents.js";

describe("test for function return {percent} from {number}", () => {
  it("should operate correctly with numbers", () => {
    expect(getPercents(30, 200)).toBe(60);
  });
  it(`with not correct data should return warning message`, () => {
    expect(getPercents("string", 200)).toBe("Некорректные данные");
  });

  it("return range 0 to 100", () => {
    expect(getPercents(0, 200)).toBeGreaterThan(-1);
    expect(getPercents(30, 200)).toBeLessThan(101);
  });

  it("return number", () => expect(getPercents(30, 200)).not.toBe(isNaN));
});
