import defaultConverter from "../../src/converter/defaultConverter";
import { parseISO, formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

jest.mock("date-fns", () => ({
  parseISO: jest.fn(),
  formatDistanceToNow: jest.fn(),
}));

const date = new Date();

describe("exports", () => {
  it("exports", () => {
    expect(typeof defaultConverter).toEqual("function");
  });
});

describe("defaultConverter", () => {
  it("should call date-fns function with date", () => {
    defaultConverter(date);

    expect(formatDistanceToNow).toHaveBeenCalledWith(date, {
      addSuffix: true,
      includeSeconds: undefined,
      locale: undefined,
    });
  });

  it("should convert a ISO string to a Date", () => {
    const ISOString = date.toISOString();

    defaultConverter(ISOString);

    expect(parseISO).toHaveBeenCalledWith(ISOString);
  });

  it("should use the converterOptions", () => {
    defaultConverter(date, { addSuffix: false, includeSeconds: true });

    expect(formatDistanceToNow).toHaveBeenCalledWith(date, {
      addSuffix: false,
      includeSeconds: true,
      locale: undefined,
    });
  });

  it("should use the specified locale", () => {
    defaultConverter(date, { addSuffix: false, includeSeconds: true }, es);

    expect(formatDistanceToNow).toHaveBeenCalledWith(date, {
      addSuffix: false,
      includeSeconds: true,
      locale: es,
    });
  });
});
