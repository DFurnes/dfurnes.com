import Link from 'next/link';
import tw from 'twin.macro';

const Description = tw.span`block font-sans text-xxs text-gray-400`;

export default function NoteLink({ note }) {
  return (
    <>
      <Link href={`/notes/${note.fields.slug}`} passHref>
        <a>{note.fields.title}</a>
      </Link>{' '}
      {note.fields.emoji}
      <Description>{note.fields.description}</Description>
    </>
  );
}
