import { Locale, parseISO, formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";

export type converterOptions = {
  includeSeconds?: boolean;
  addSuffix?: boolean;
  useStrict?: boolean;
};

export default (
  date: string | Date,
  converterOptions: converterOptions = {},
  locale?: Locale
): string => {
  if (typeof date === "string") {
    date = parseISO(date);
  }

  const { includeSeconds, addSuffix = true, useStrict = false } = converterOptions;

  if(useStrict) {
    return formatDistanceToNowStrict(date, {
      addSuffix,
      locale
    });
  }

  return formatDistanceToNow(date, {
    includeSeconds,
    addSuffix,
    locale,
  });
};
