import { Locale, parseISO, formatDistanceToNow } from 'date-fns'

export type converterOptions = {
  includeSeconds?: boolean,
  addSuffix?: boolean,
}

export default (date: string | Date, converterOptions: converterOptions = {}, locale?: Locale): string => {
  if (typeof date === 'string') {
    date = parseISO(date)
  }
  
  const { includeSeconds, addSuffix = true } = converterOptions

  return formatDistanceToNow(date, {
    includeSeconds,
    addSuffix,
    locale
  })
}