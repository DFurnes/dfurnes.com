import { formatISO, format as formatDate } from 'date-fns';
import { formatDistance } from 'date-fns';

export default function RelativeTimestamp({ dateString }) {
  const date = new Date(dateString);

  return (
    <time title={formatDate(date, 'LLLL d, yyyy')} dateTime={formatISO(date)}>
      {formatDistance(date, Date.now(), { addSuffix: true })}
    </time>
  );
}
