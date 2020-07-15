import tw from 'twin.macro';

const Banner = tw.div`inline-flex bg-purple-600 md:bg-gray-100 md:dark:bg-gray-800
                      items-center text-white md:text-gray-800 md:dark:text-white rounded md:rounded-full p-2`;
const Badge = tw.span`hidden md:block bg-purple-600 font-bold text-white uppercase px-2 py-1 rounded-full`;
const BannerSegment = tw.span`mx-2 text-left flex-auto`;
const BannerLink = tw.a`text-white md:text-black dark:text-white border-purple-400 md:border-gray-300`;

export default function PreviewBar({ preview }) {
  if (!preview) {
    return null;
  }

  return (
    <div tw="font-sans text-xs text-center mb-6 md:mb-16">
      <Banner role="alert">
        <Badge>Preview</Badge>
        <BannerSegment>
          <strong tw="md:hidden">Preview Mode:</strong> You can now see drafted
          &amp; unpublished content.{' '}
        </BannerSegment>
        <BannerSegment>
          <BannerLink href="/api/done">Done</BannerLink>
        </BannerSegment>
      </Banner>
    </div>
  );
}
