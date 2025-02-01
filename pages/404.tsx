import Head from 'next/head';
import Link from 'next/link';
import tw from 'twin.macro';

import Layout, { Header, Footer } from 'components/Layout';
import PreviewBanner from 'components/PreviewBanner';

export default function NotFound({ preview = false }) {
  return (
    <Layout>
      <Head>
        <title>Not Found</title>
      </Head>
      <PreviewBanner preview={preview} />
      <Header emoji="👻" />

      <h1>Not Found</h1>

      <p>
        That page seems to have gone missing. <Link href="/">Try again</Link>!
      </p>
      <Footer />
    </Layout>
  );
}
