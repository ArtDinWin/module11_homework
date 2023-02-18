import { getMonth } from "../utils/getMonth.js";

describe("test for returns month's name by number", () => {
  const notCorrectNumber = 13;
  const zero = 0;
  const string = "String";
  const notNumber = "String" / 2;

  it("should operate correctly with number 1 to 12", () => {
    expect(getMonth(1)).toBe("январь");
    expect(getMonth(2)).toBe("февраль");
    expect(getMonth(3)).toBe("март");
    expect(getMonth(4)).toBe("апрель");
    expect(getMonth(5)).toBe("май");
    expect(getMonth(6)).toBe("июнь");
    expect(getMonth(7)).toBe("июль");
    expect(getMonth(8)).toBe("август");
    expect(getMonth(9)).toBe("сентябрь");
    expect(getMonth(10)).toBe("октябрь");
    expect(getMonth(11)).toBe("ноябрь");
    expect(getMonth(12)).toBe("декабрь");
  });

  it(`with not correct data should return warning message`, () => {
    expect(getMonth(notCorrectNumber)).toBe(
      "Месяца с таким номером не существует!"
    );
    expect(getMonth(zero)).toBe("Месяца с таким номером не существует!");
    expect(getMonth(string)).toBe("Месяца с таким номером не существует!");
    expect(getMonth(notNumber)).toBe("Месяца с таким номером не существует!");
  });
});
