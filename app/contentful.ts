import { createClient, EntryCollection, Entry } from 'contentful';

import { IPostFields } from 'app/schema';

/**
 * Types!
 */
export type Post = Entry<IPostFields>;
export type PostCollection = EntryCollection<IPostFields>;

const deliveryApi = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const previewApi = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
  host: 'preview.contentful.com',
});

/**
 * Create a Contentful API client.
 *
 * @param preview - Should we use Preview API?
 */
function contentful(preview = false) {
  return preview ? previewApi : deliveryApi;
}

/**
 * Fetch a post by the 'slug' field.
 *
 * @param slug
 */
export async function getNote(slug: string, preview = false) {
  const results: PostCollection = await contentful(preview).getEntries({
    content_type: 'post',
    'fields.slug': slug,
    include: 10,
    limit: 1,
  });

  return results.items[0] || null;
}

/**
 * List all post slugs, for static generation.
 */
export async function getAllNoteSlugs(preview = false): Promise<string[]> {
  const results: PostCollection = await contentful(preview).getEntries({
    content_type: 'post',
  });

  return results.items.map(item => `/notes/${item.fields.slug}`);
}

/**
 * Fetch the 20 most recent posts.
 */
export async function getNotes(preview = false) {
  const results: PostCollection = await contentful(preview).getEntries({
    content_type: 'post',
    order: 'fields.archived,-fields.date',
    'fields.hidden[ne]': true,
    include: 10,
    limit: 20,
  });

  return Promise.all(results.items);
}
