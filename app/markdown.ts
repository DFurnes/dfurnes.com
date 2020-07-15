import footnotes from 'remark-footnotes';
import highlight from 'remark-highlight.js';
import html from 'remark-html';
import remark from 'remark';

/**
 * Process the given Markdown source into HTML.
 *
 * @param source - Markdown source
 */
export default function markdown(source: string | null) {
  if (!source) {
    return null;
  }

  const renderer = remark().use(html).use(highlight).use(footnotes);
  const { contents } = renderer.processSync(source);

  return contents as string;
}
