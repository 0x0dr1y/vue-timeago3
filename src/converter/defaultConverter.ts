import toNow from 'date-fns/formatDistanceToNow'
import parseISO from 'date-fns/parseISO'

export type converterOptions = {
  includeSeconds?: boolean,
  addSuffix?: boolean,
}

export default (date: string | Date, converterOptions: converterOptions): string => {
  if (typeof date === 'string') {
    date = parseISO(date)
  }
  
  const { includeSeconds, addSuffix = false } = converterOptions
  
  return toNow(date, {
    includeSeconds,
    addSuffix
  })
}