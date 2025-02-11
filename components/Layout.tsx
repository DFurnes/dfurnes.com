import { useTheme } from 'next-themes';
import Link from 'next/link';
import tw from 'twin.macro';

import DarkModeIcon from './icons/dark-mode.svg';
import TwitterIcon from './icons/twitter.svg';
import GithubIcon from './icons/github.svg';
import KeyIcon from './icons/key.svg';

export default tw.div`max-w-screen-md mx-auto mb-8 md:my-12 p-3 md:p-6`;

const ICON_SIZE = 18;

const footerIconStyles = tw`fill-current text-gray-400`;

export const Header = ({ emoji }) => (
  <header tw="font-sans text-xs text-gray-500 mb-8">
    <Link href="/">David Furnes</Link> is a software engineer based in Brooklyn,
    New York. {emoji}
  </header>
);

export const FooterIcon = ({ styles = null, title, href, Icon }) => (
  <a title={title} href={href} css={[footerIconStyles, styles]}>
    <Icon width={ICON_SIZE} height={ICON_SIZE} />
  </a>
);

export const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      title="Toggle dark mode"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      css={[
        footerIconStyles,
        tw`hover:text-purple-600 dark:hover:text-yellow-300`,
      ]}
    >
      <DarkModeIcon width={ICON_SIZE} height={ICON_SIZE} />
    </button>
  );
};

export const Footer = () => (
  <footer tw="mt-16">
    <ul>
      <li tw="float-left mr-3">
        <FooterIcon
          Icon={TwitterIcon}
          title="@dfurnes on Twitter"
          href="https://twitter.com/dfurnes"
          css={tw`hover:text-blue-500`}
        />
      </li>
      <li tw="float-left mr-3">
        <FooterIcon
          Icon={GithubIcon}
          title="@dfurnes on GitHub"
          href="https://github.com/dfurnes"
          css={tw`hover:text-black dark:hover:text-white`}
        />
      </li>
      <li tw="float-left mr-3">
        <FooterIcon
          Icon={KeyIcon}
          title="@dfurnes on Keybase"
          href="https://keybase.io/dfurnes"
          css={tw`hover:text-yellow-400`}
        />
      </li>
      <li tw="float-right ml-3">
        <DarkModeToggle />
      </li>
    </ul>
  </footer>
);
