import {
  Locale,
  parseISO,
  formatDistanceToNow,
  formatDistanceToNowStrict,
} from "date-fns";

export type converterOptions = {
  includeSeconds?: boolean;
  addSuffix?: boolean;
  useStrict?: boolean;
  unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year';
  roundingMethod?: 'floor' | 'ceil' | 'round';
};

export default (
  date: string | Date,
  converterOptions: converterOptions = {},
  locale?: Locale
): string => {
  if (typeof date === "string") {
    date = parseISO(date);
  }

  const {
    includeSeconds,
    addSuffix = true,
    useStrict = false,
    unit,
    roundingMethod,
  } = converterOptions;

  if (useStrict) {
    return formatDistanceToNowStrict(date, {
      addSuffix,
      locale,
      unit,
      roundingMethod,
    });
  }

  return formatDistanceToNow(date, {
    includeSeconds,
    addSuffix,
    locale,
  });
};
