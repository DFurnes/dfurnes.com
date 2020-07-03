import footnotes from 'remark-footnotes';
import highlight from 'remark-highlight.js';
import html from 'remark-html';
import remark from 'remark';

/**
 * Process the given Markdown source into HTML.
 *
 * @param source - Markdown source
 */
export default async function markdown(source: string | null) {
  const renderer = remark().use(html).use(highlight).use(footnotes);

  const result = await renderer.process(source);

  return result.contents as string;
}
