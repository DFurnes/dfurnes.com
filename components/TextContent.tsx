import tw from 'twin.macro';
import { css } from '@emotion/core';

const styles = css`
  /** Allow the browser to hyphenate where it makes sense. */
  hyphens: auto;

  /** Center images & round their borders: */
  img {
    ${tw`my-4 mx-auto rounded`}
  }

  /* Highlight.js: */
  .hljs {
    ${tw`block bg-gray-50 dark:bg-gray-900 dark:text-white overflow-auto p-3 rounded`}
  }

  .hljs-keyword {
    ${tw`text-purple-500`}
  }

  .hljs-string,
  .hljs-doctag {
    ${tw`text-pink-500`}
  }

  /** Remark Footnotes: */
  .footnotes {
    ${tw`border-0 text-sm my-8`}
  }

  .footnotes hr {
    ${tw`mb-8 border-gray-100 dark:border-gray-800`}
  }

  .footnotes ol {
    ${tw`list-decimal pl-8`}
  }

  .footnotes li {
    ${tw`mb-3`}
  }

  .footnote-ref {
    border: 0;
  }

  .footnote-backref {
    padding-left: 0.5em;
    border: 0;
  }
`;

export default function TextContent({ html }) {
  return <div css={styles} dangerouslySetInnerHTML={{ __html: html }} />;
}
