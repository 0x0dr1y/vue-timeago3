import toNow from 'date-fns/formatDistanceToNow'
import parseISO from 'date-fns/parseISO'

export default (date, converterOptions) => {
  if (typeof date === 'string') {
    date = parseISO(date)
  }
  
  const { includeSeconds, addSuffix = true } = converterOptions
  
  return toNow(date, {
    includeSeconds,
    addSuffix
  })
}