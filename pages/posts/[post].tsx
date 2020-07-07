import { css } from '@emotion/core';
import Head from 'next/head';
import { GetStaticPropsContext, GetStaticPaths } from 'next';
import { InferGetStaticPropsType } from 'next';

import Layout, { Header, Footer } from 'components/Layout';
import NotFound from 'pages/404';
import PreviewBanner from 'components/PreviewBanner';
import Timestamp from 'components/Timestamp';
import markdown from 'app/markdown';
import TextContent from 'components/TextContent';
import { getAllPostSlugs, getPost } from 'app/contentful';

import 'twin.macro';

type PropTypes = InferGetStaticPropsType<typeof getStaticProps>;

export default function PostPage({ post, preview, content }: PropTypes) {
  if (!post) {
    return <NotFound preview={preview} />;
  }

  return (
    <Layout>
      <Head>
        <title>{post.fields.title} – David Furnes</title>
      </Head>
      <PreviewBanner preview={preview} />
      <Header emoji={post.fields.emoji} />
      <h1>{post.fields.title}</h1>
      <TextContent html={content} />
      <br />
      <aside tw="font-sans text-xs text-gray-500 mb-8">
        Written on <Timestamp dateString={post.fields.date} />.{' '}
        {post.fields.footnote}
      </aside>
      <Footer />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getAllPostSlugs(),
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params, preview } = context;

  const post = await getPost(params.post, preview);

  return {
    props: {
      post,
      preview: Boolean(context.preview),
      content: post ? markdown(post.fields.content) : null,
    },
  };
};
