import Head from 'next/head';
import { GetStaticPropsContext, GetStaticPaths } from 'next';
import { InferGetStaticPropsType } from 'next';

import Layout, { Header, Footer } from 'components/Layout';
import markdown from 'app/markdown';
import ResponsiveEmbed from 'components/ResponsiveEmbed';
import TextContent from 'components/TextContent';
import Timestamp from 'components/Timestamp';
import { getAllTalkSlugs, getTalk } from 'app/contentful';
import { getEmbed } from 'app/embed';

import 'twin.macro';

type PropTypes = InferGetStaticPropsType<typeof getStaticProps>;

export default function TalkPage({ talk, embed, description }: PropTypes) {
  return (
    <Layout>
      <Head>
        <title>{talk.fields.title} – David Furnes</title>
      </Head>
      <Header emoji={talk.fields.emoji} />
      <h1>{talk.fields.title}</h1>
      <TextContent html={description} />
      <ResponsiveEmbed tw="my-8" dangerouslySetInnerHTML={{ __html: embed }} />
      <p>
        View presentation on <a href={talk.fields.url}>SpeakerDeck</a>.
      </p>
      <aside tw="font-sans text-xs text-gray-500 mb-8">
        Originally presented on <Timestamp dateString={talk.fields.date} />
      </aside>
      <Footer />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getAllTalkSlugs(),
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const talk = await getTalk(context.params.talk);

  return {
    props: {
      talk,
      embed: await getEmbed(talk.fields.url),
      description: await markdown(talk.fields.description),
    },
  };
};
