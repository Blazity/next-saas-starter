import format from 'date-fns/format';
import isValid from 'date-fns/isValid';

export function formatDate(date: number | Date) {
  return isValid(date) ? format(date, 'do MMMM yyyy') : 'N/A';
}
