import githubMarkdown from 'remark-gfm';
import highlight from 'rehype-highlight';
import parseMarkdown from 'remark-parse';
import stringify from 'rehype-stringify';
import toRehype from 'remark-rehype';
import withRawHtml from 'rehype-raw';
import { unified } from 'unified';

import vim from 'highlight.js/lib/languages/vim';

/**
 * Process the given Markdown source into HTML.
 *
 * @param source - Markdown source
 */
export default function markdown(source: string | null) {
  if (!source) {
    return null;
  }

  const renderer = unified()
    .use(parseMarkdown)
    .use(githubMarkdown)
    .use(toRehype, { allowDangerousHtml: true })
    .use(withRawHtml)
    .use(highlight, { languages: { vim } })
    .use(stringify);

  const file = renderer.processSync(source);

  return String(file);
}
