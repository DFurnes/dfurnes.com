import styled from '@emotion/styled';

/**
 * A 16:9 responsive embed container, based on Bootstrap's 'Responsive Embed'
 * utility class: https://getbootstrap.com/docs/4.4/utilities/embed/
 *
 * Usage: <ResponsiveEmbed dangerouslySetInnerHTML={{ __html: embed }} />
 */
export default styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  padding-top: 56.25%;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
