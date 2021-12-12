import Head from 'next/head';
import Link from 'next/link';
import tw from 'twin.macro';
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { groupBy, keys } from 'lodash';

import Layout, { Footer } from 'components/Layout';
import Logo from 'components/Logo';
import NoteLink from 'components/NoteLink';
import PreviewBanner from 'components/PreviewBanner';
import { getNotes } from 'app/contentful';

const Section = tw.ul`my-16`;
const FootnoteLink = tw.a`block font-sans text-xs text-gray-500 dark:text-gray-400 underline hover:text-pink-500 border-b-0`;

type PropTypes = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ preview, notes }: PropTypes) {
  const postsByYear = groupBy(notes, note =>
    new Date(note.fields.date).getFullYear()
  );

  const years = keys(postsByYear).sort((a, b) => b - a);

  return (
    <Layout>
      <Head>
        <title>David Furnes</title>
        <meta
          name="description"
          content="Software engineer at Stripe, working on JavaScript infrastructure. Previously, I built tools to power social change at DoSomething.org."
        />
      </Head>
      <PreviewBanner preview={preview} />
      <div tw="my-32">
        <Logo />
        <p tw="text-xl mt-8 mb-32 mr-3 italic">
          Software engineer at <a href="https://www.stripe.com">Stripe</a>,
          working on JavaScript infrastructure. Previously, I built tools to
          power social change at{' '}
          <a href="https://www.dosomething.org">DoSomething.org</a>.
        </p>
      </div>
      {years.map(year => (
        <Section tw="pr-6" key={year}>
          <h2 tw="font-sans text-pink-500 text-xs">{year}</h2>
          {postsByYear[year].map(note => (
            <li tw="mb-3" key={note.fields.slug}>
              <NoteLink note={note} />
            </li>
          ))}
        </Section>
      ))}
      <Section tw="pr-6">
        <Link href="/notes/about" passHref>
          <FootnoteLink>about this website</FootnoteLink>
        </Link>
      </Section>
      <Footer />
    </Layout>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: {
      preview: Boolean(context.preview),
      notes: await getNotes(context.preview),
    },
  };
};
