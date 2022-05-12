import {
  Locale,
  parseISO,
  formatDistanceToNow,
  formatDistanceToNowStrict,
} from "date-fns";

interface DefaultConverterOptions {
  useStrict?: false;
  includeSeconds?: boolean;
  addSuffix?: boolean;
}

interface StrictConverterOptions {
  useStrict: true;
  addSuffix?: boolean;
  unit?: "second" | "minute" | "hour" | "day" | "month" | "year";
  roundingMethod?: "floor" | "ceil" | "round";
}

export type ConverterOptions = DefaultConverterOptions | StrictConverterOptions;

export default (
  date: string | Date,
  converterOptions: ConverterOptions = {},
  locale?: Locale
): string => {
  if (typeof date === "string") {
    date = parseISO(date);
  }

  if (converterOptions.useStrict) {
    return formatDistanceToNowStrict(date, {
      addSuffix: converterOptions.addSuffix ?? true,
      locale,
      unit: converterOptions.unit,
      roundingMethod: converterOptions.roundingMethod,
    });
  }

  return formatDistanceToNow(date, {
    includeSeconds: converterOptions.includeSeconds,
    addSuffix: converterOptions.addSuffix ?? true,
    locale,
  });
};
