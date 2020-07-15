import Link from 'next/link';
import tw from 'twin.macro';

const Description = tw.span`block font-sans text-xxs text-gray-400`;

export default function NoteLink({ note }) {
  return (
    <>
      <Link href="/notes/[slug]" as={`/notes/${note.fields.slug}`} passHref>
        <a
          css={note.fields.featured ? tw`bg-yellow-100 dark:bg-gray-900` : null}
        >
          {note.fields.title}
        </a>
      </Link>{' '}
      {note.fields.emoji}
      <Description>{note.fields.description}</Description>
    </>
  );
}
