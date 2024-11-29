import format from 'date-fns/format';
import isValid from 'date-fns/isValid';

export function formatDate(date: number | Date) {
  return isValid(date) ? format(date, 'do MMMM yyyy') : 'N/A';
}

export function convertToISODate(dateStr: string) {
  const [day, month, year] = dateStr.split('-');
  const date = new Date(`${year}-${month}-${day}`);
  return date.toISOString();
}

export const nextSevenDateFormatter = (dateStr: string) => {
  const [day, month] = dateStr.split('-').map(Number);
  const year = new Date().getFullYear();
  const date = new Date(year, month - 1, day);

  date.setDate(date.getDate() + 7);

  const newDay = String(date.getDate()).padStart(2, '0');
  const newMonth = String(date.getMonth() + 1).padStart(2, '0');
  const newYear = date.getFullYear();

  return `${newDay}-${newMonth}-${newYear}`;
};
