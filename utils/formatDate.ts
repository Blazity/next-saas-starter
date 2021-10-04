import format from 'date-fns/format';

export function formatDate(date) {
  return format(date, 'do MMMM yyyy');
}
