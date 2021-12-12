import tw, { css } from 'twin.macro';

const styles = css`
  /** Allow the browser to hyphenate where it makes sense. */
  hyphens: auto;

  /** Center images & round their borders: */
  img {
    ${tw`my-4 mx-auto rounded`}
  }

  code {
    font-size: 0.9em;

    ${tw`bg-gray-50 dark:bg-gray-900 dark:text-white border-2 border-gray-50 dark:border-gray-900 rounded px-1`}
  }

  /* Highlight.js: */
  .hljs {
    ${tw`block bg-gray-50 dark:bg-gray-900 dark:text-white overflow-auto p-3 rounded`}
  }

  .hljs-comment {
    ${tw`text-gray-400`}
  }

  .hljs-number,
  .hljs-keyword {
    ${tw`text-purple-500`}
  }

  .hljs-string,
  .hljs-doctag {
    ${tw`text-pink-500`}
  }

  /** Custom markup: */
  .aside {
    ${tw`font-sans text-xs text-gray-500 mb-6`}
  }

  .paper {
    ${tw`italic text-sm max-w-sm mx-auto`}
  }

  .paper em {
    ${tw`text-gray-500`}
  }

  /** Remark Footnotes: */
  .footnotes {
    ${tw`font-sans text-xs border-0 my-8`}
  }

  .footnotes ol {
    ${tw`list-decimal pl-8`}
  }

  .footnotes li {
    ${tw`mb-3`}
  }

  .data-footnote-backref {
    ${tw`text-gray-500 hover:text-pink-500`}
    padding-left: 0.5em;
    border: 0;
  }

  .sr-only {
    ${tw`sr-only`}
  }
`;

export default function TextContent({ html }) {
  return <div css={styles} dangerouslySetInnerHTML={{ __html: html }} />;
}
