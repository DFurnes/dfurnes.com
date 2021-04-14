import Head from 'next/head';
import Link from 'next/link';
import tw from 'twin.macro';
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next';

import NoteLink from 'components/NoteLink';
import Layout, { Footer } from 'components/Layout';
import Logo from 'components/Logo';
import PreviewBanner from 'components/PreviewBanner';
import { getNotes } from 'app/contentful';

const Section = tw.ul`my-8`;
const FootnoteLink = tw.a`block font-sans text-xs text-gray-500 dark:text-gray-400 underline hover:text-pink-500 border-b-0`;

type PropTypes = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ preview, notes }: PropTypes) {
  return (
    <Layout>
      <Head>
        <title>David Furnes</title>
        <meta
          name="description"
          content="I like making things that make life better. I'm a software engineer at DoSomething.org, where I build tools to make social change fun."
        />
      </Head>
      <PreviewBanner preview={preview} />
      <Logo />
      <p tw="text-xl mr-3">
        <b>I like making things that make life better.</b> I'm a software
        engineer at <a href="https://www.dosomething.org">DoSomething.org</a>,
        where I build tools to make social change fun.
      </p>
      <Section tw="pr-6">
        {notes.map(note => (
          <li tw="mb-3" key={note.fields.slug}>
            <NoteLink note={note} />
          </li>
        ))}
      </Section>
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
