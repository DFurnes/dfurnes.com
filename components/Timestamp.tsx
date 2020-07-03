import { formatISO, format as formatDate } from 'date-fns';

export default function Timestamp({ dateString, format = 'LLLL d, yyyy' }) {
  const date = new Date(dateString);

  return <time dateTime={formatISO(date)}>{formatDate(date, format)}</time>;
}
