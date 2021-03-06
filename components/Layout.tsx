import Link from 'next/link';
import tw from 'twin.macro';

import TwitterIcon from './icons/twitter.svg';
import GithubIcon from './icons/github.svg';
import KeyIcon from './icons/key.svg';

export default tw.div`max-w-screen-md mx-auto mb-8 md:my-12 p-3 md:p-6`;

export const Header = ({ emoji }) => (
  <header tw="font-sans text-xs text-gray-500 mb-8">
    <Link href="/">
      <a>David Furnes</a>
    </Link>{' '}
    is an engineer at{' '}
    <a tw="text-gray-500" href="https://www.dosomething.org">
      DoSomething.org
    </a>
    , where he builds tools to make social change fun. {emoji}
  </header>
);

export const FooterIcon = ({ styles = null, title, href, Icon }) => (
  <a
    title={title}
    href={href}
    css={[
      tw`fill-current text-gray-200 dark:text-gray-600 hover:text-pink-500`,
      styles,
    ]}
  >
    <Icon width={22} height={22} />
  </a>
);

export const Footer = () => (
  <footer tw="mt-16">
    <ul>
      <li tw="float-left mr-3">
        <FooterIcon
          Icon={TwitterIcon}
          title="@dfurnes on Twitter"
          href="https://twitter.com/dfurnes"
          styles={tw`hover:text-blue-500`}
        />
      </li>
      <li tw="float-left mr-3">
        <FooterIcon
          Icon={GithubIcon}
          title="@dfurnes on GitHub"
          href="https://github.com/dfurnes"
          styles={tw`hover:text-black dark:hover:text-white`}
        />
      </li>
      <li tw="float-left mr-3">
        <FooterIcon
          Icon={KeyIcon}
          title="@dfurnes on Keybase"
          href="https://keybase.io/dfurnes"
          styles={tw`hover:text-gold`}
        />
      </li>
    </ul>
  </footer>
);
