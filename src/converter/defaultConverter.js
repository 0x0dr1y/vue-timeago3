import toNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';
export default (date, converterOptions) => {
    if (typeof date === 'string') {
        date = parseISO(date);
    }
    const { includeSeconds, addSuffix = false } = converterOptions;
    return toNow(date, {
        includeSeconds,
        addSuffix
    });
};
//# sourceMappingURL=defaultConverter.js.map