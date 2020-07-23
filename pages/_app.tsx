import { AppProps } from 'next/app';
import { Router } from 'next/router';
import { Global, css } from '@emotion/core';
import { useEffect } from 'react';
import tw from 'twin.macro';

import { handlePageview } from 'app/analytics';

import './fonts.css';
import 'tailwindcss/dist/base.min.css';

const elements = {
  body: tw`bg-white dark:bg-black font-serif text-lg text-black dark:text-gray-100`,
  h1: tw`font-serif font-bold dark:text-white text-3xl md:text-5xl mb-8 leading-tight`,
  h2: tw`font-serif dark:text-white text-2xl font-bold`,
  h3: tw`font-serif font-bold dark:text-white md:text-xl italic`,
  h4: tw`text-gray-500 italic`,
  blockquote: tw`italic p-8`,
  strong: tw`dark:text-white`,
  a: tw`no-underline text-black dark:text-white hover:text-pink-500 
        border-b-2 border-gray-100 dark:border-gray-700 hover:border-pink-500`,
};

const combinations = css`
  html {
    font-size: 18px;
  }

  p + h1,
  p + h2,
  p + h3,
  p + h4 {
    margin-top: 1em;
  }

  p + ul,
  ul + p {
    margin-top: 1em;
  }

  ul + h1,
  ul + h2,
  ul + h3,
  ul + h4 {
    margin-top: 1em;
  }

  p + p {
    margin-top: 1em;
  }

  p + pre,
  pre + p {
    margin-top: 1em;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Register Google analytics pageview tracking.
    Router.events.on('routeChangeComplete', handlePageview);
    return () => Router.events.off('routeChangeComplete', handlePageview);
  }, []);

  return (
    <>
      <Global styles={[elements, combinations]} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
