import Head from 'next/head';
import Link from 'next/link';
import tw from 'twin.macro';

import Layout, { Header, Footer } from 'components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <Head>
        <title>Not Found</title>
      </Head>
      <Header emoji="👻" />

      <h1>Not Found</h1>

      <p>
        That page seems to have gone missing.{' '}
        <Link href="/">
          <a>Try again</a>
        </Link>
        !
      </p>
      <Footer />
    </Layout>
  );
}
