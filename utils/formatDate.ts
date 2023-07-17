import { format as formatFn, parseISO } from 'date-fns';

export const formatDate = (
  date: string,
  format: string = 'LLLL d, yyyy'
): string => {
  return formatFn(parseISO(date), format);
};
