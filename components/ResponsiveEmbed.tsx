import styled from '@emotion/styled';
import tw from 'twin.macro';

/**
 * A 16:9 responsive embed container, based on Bootstrap's 'Responsive Embed'
 * utility class: https://getbootstrap.com/docs/4.4/utilities/embed/
 *
 * Usage: <ResponsiveEmbed dangerouslySetInnerHTML={{ __html: embed }} />
 */
export default styled.div`
  ${tw`block relative w-full bg-gray-100 dark:bg-gray-800
       overflow-hidden rounded-lg`}

  /* Maintain 16:19 aspect ratio! */
  padding: 56.25% 0 0 0;

  iframe {
    ${tw`absolute inset-0 w-full h-full border-none`}
  }
`;
