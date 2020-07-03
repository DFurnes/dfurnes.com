import { createClient, EntryCollection, Entry } from 'contentful';

import { IPostFields, ITalkFields } from 'app/schema';

const contentful = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

/**
 * Types!
 */
export type Post = Entry<IPostFields>;
export type PostCollection = EntryCollection<IPostFields>;
export type Talk = Entry<ITalkFields>;
export type TalkCollection = EntryCollection<ITalkFields>;

/**
 * Fetch a post by the 'slug' field.
 *
 * @param slug
 */
export async function getPost(slug) {
  const results: PostCollection = await contentful.getEntries({
    content_type: 'post',
    'fields.slug': slug,
    include: 10,
    limit: 1,
  });

  return results.items[0];
}

/**
 * List all post slugs, for static generation.
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const results: PostCollection = await contentful.getEntries({
    content_type: 'post',
  });

  return results.items.map(item => `/posts/${item.fields.slug}`);
}

/**
 * Fetch the 20 most recent posts.
 */
export async function getRecentPosts() {
  const results: PostCollection = await contentful.getEntries({
    content_type: 'post',
    order: '-fields.date',
    include: 10,
    limit: 20,
  });

  return Promise.all(results.items);
}

/**
 * Fetch a talk by the 'slug' field.
 *
 * @param slug
 */
export async function getTalk(slug) {
  const results: TalkCollection = await contentful.getEntries({
    content_type: 'talk',
    'fields.slug': slug,
    include: 10,
    limit: 1,
  });

  return results.items[0];
}

/**
 * List all talk slugs, for static generation.
 */
export async function getAllTalkSlugs(): Promise<string[]> {
  const results: TalkCollection = await contentful.getEntries({
    content_type: 'talk',
  });

  return results.items.map(item => `/talks/${item.fields.slug}`);
}

/**
 * Fetch the 20 most recent talks.
 */
export async function getRecentTalks() {
  const results: TalkCollection = await contentful.getEntries({
    content_type: 'talk',
    order: '-fields.date',
    include: 10,
    limit: 20,
  });

  return Promise.all(results.items);
}
