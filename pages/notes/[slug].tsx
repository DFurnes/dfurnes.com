import Head from 'next/head';
import { GetStaticPropsContext, GetStaticPaths } from 'next';
import { InferGetStaticPropsType } from 'next';

import ArchivedNotice from 'components/ArchivedNotice';
import Layout, { Header, Footer } from 'components/Layout';
import NotFound from 'pages/404';
import PreviewBanner from 'components/PreviewBanner';
import Timestamp from 'components/Timestamp';
import markdown from 'app/markdown';
import ResponsiveEmbed from 'components/ResponsiveEmbed';
import TextContent from 'components/TextContent';
import { getAllNoteSlugs, getNote } from 'app/contentful';
import { getEmbed } from 'app/embed';

import tw, { css } from 'twin.macro';

type PropTypes = InferGetStaticPropsType<typeof getStaticProps>;

export default function NotePage({
  note,
  preview,
  content,
  embed,
  footnote,
}: PropTypes) {
  if (!note) {
    return <NotFound preview={preview} />;
  }

  return (
    <Layout>
      <Head>
        <title>{note.fields.title} – David Furnes</title>
        <meta name="description" content={note.fields.description} />
      </Head>
      <PreviewBanner preview={preview} />
      <Header emoji={note.fields.emoji} />
      <h1 tw="mt-28">{note.fields.title}</h1>
      <p tw="text-2xl md:text-3xl italic text-pink-400 max-w-lg mb-32 md:mb-48">
        {note.fields.description}
      </p>
      {embed ? (
        <ResponsiveEmbed
          tw="my-8"
          dangerouslySetInnerHTML={{ __html: embed }}
        />
      ) : null}
      {note.fields.archived ? <ArchivedNotice note={note} /> : null}
      <TextContent html={content} />
      <aside
        css={[
          tw`font-sans text-xs text-gray-500 mt-8 mb-8`,
          css`
            div,
            p {
              display: inline;
            }
          `,
        ]}
      >
        {note.fields.displayDate ? (
          <>
            Written on <Timestamp dateString={note.fields.date} />.{' '}
          </>
        ) : null}
        {footnote ? (
          <div dangerouslySetInnerHTML={{ __html: footnote }} />
        ) : null}
      </aside>
      <Footer />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getAllNoteSlugs(),
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params, preview } = context;
  const slug = String(params?.slug);

  const note = slug ? await getNote(slug, preview) : null;

  return {
    props: {
      note,
      preview: Boolean(context.preview),
      content: markdown(note?.fields.content),
      footnote: markdown(note?.fields.footnote),
      embed: await getEmbed(note?.fields.embedUrl),
    },
  };
};
