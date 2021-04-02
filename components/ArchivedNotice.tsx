import HistoryIcon from './icons/history.svg';
import RelativeTimestamp from 'components/RelativeTimestamp';

import tw from 'twin.macro';

const Alert = tw.div`flex items-center font-sans text-sm mb-6`;

export default function PreviewBar({ note }) {
  return (
    <Alert>
      <p>
        <strong>
          <HistoryIcon tw="inline-block align-text-bottom fill-current text-yellow-500 flex-initial mr-1 h-4" />
          May be outdated!
        </strong>{' '}
        This note was last updated{' '}
        <RelativeTimestamp dateString={note.fields.date} />.
      </p>
    </Alert>
  );
}
