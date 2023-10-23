import defaultConverter from "../../src/converter/defaultConverter";
import {
  formatDistanceToNow,
  formatDistanceToNowStrict,
  parseISO,
} from "date-fns";
import { es } from "date-fns/locale";
import {vi, describe, expect, it} from 'vitest';

vi.mock("date-fns", () => ({
  parseISO: vi.fn(),
  formatDistanceToNow: vi.fn(),
  formatDistanceToNowStrict: vi.fn(),
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

  it("should use the strict mode", () => {
    defaultConverter(date, { addSuffix: true, useStrict: true }, es);

    expect(formatDistanceToNowStrict).toHaveBeenCalledWith(date, {
      addSuffix: true,
      locale: es,
    });
  });
});
