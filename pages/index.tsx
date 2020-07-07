import Head from 'next/head';
import Link from 'next/link';
import tw from 'twin.macro';
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next';

import Layout, { Footer } from 'components/Layout';
import Logo from 'components/Logo';
import PreviewBanner from 'components/PreviewBanner';
import Timestamp from 'components/Timestamp';
import { getRecentPosts, getRecentTalks } from 'app/contentful';
import { getRepositories } from 'app/github';

const Section = tw.section`my-8`;
const SectionHeading = tw.h1`font-sans text-xs font-bold uppercase mb-2 `;
const Description = tw.span`font-sans text-xxs text-gray-400`;

type PropTypes = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ preview, repos, posts, talks }: PropTypes) {
  return (
    <Layout>
      <Head>
        <title>David Furnes</title>
      </Head>
      <PreviewBanner preview={preview} />
      <Logo />
      <p tw="text-xl mr-3">
        <b>I like making things that make life better.</b> I'm a software
        engineer at <a href="https://www.dosomething.org">DoSomething.org</a>,
        where I build tools to make social change fun.
      </p>
      <Section>
        <SectionHeading>Open Source:</SectionHeading>
        <ul>
          {repos.map(repo => (
            <li key={repo.data.id}>
              <a href={repo.data.homepage || repo.data.html_url}>
                {repo.data.name}
              </a>
              <Description> {repo.data.description}</Description>
            </li>
          ))}
        </ul>
      </Section>
      <Section tw="pr-6">
        <SectionHeading>Writing:</SectionHeading>
        <ul>
          {posts.map(post => (
            <li key={post.fields.slug}>
              <Link href="/posts/[post]" as={`/posts/${post.fields.slug}`}>
                <a>{post.fields.title}</a>
              </Link>
              <Description>
                {' '}
                {post.fields.emoji} <Timestamp dateString={post.fields.date} />
              </Description>
            </li>
          ))}
        </ul>
      </Section>
      <Section tw="pr-6">
        <SectionHeading>Talks:</SectionHeading>
        <ul>
          {talks.map(talk => (
            <li key={talk.fields.slug}>
              <Link href="/talks/[talk]" as={`/talks/${talk.fields.slug}`}>
                <a>{talk.fields.title}</a>
              </Link>
              <Description>
                {' '}
                {talk.fields.emoji}{' '}
                <Timestamp format="LLLL yyyy" dateString={talk.fields.date} />
              </Description>
            </li>
          ))}
        </ul>
      </Section>
      <Footer />
    </Layout>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const PINNED_REPOSITORIES = [
    'dfurnes/hey',
    'dfurnes/purer',
    'dfurnes/sasslint',
    'dfurnes/sasstree',
  ];

  return {
    props: {
      preview: Boolean(context.preview),
      repos: await getRepositories(PINNED_REPOSITORIES),
      posts: await getRecentPosts(context.preview),
      talks: await getRecentTalks(context.preview),
    },
  };
};
