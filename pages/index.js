import Layout from '../components/Layout.js';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tanner Wiltshire | Home</title>
      </Head>

      <Layout>
        <h1>Hi, my name is Tanner Wiltshire.</h1>
        <p>
          I'm a Front End Developer from Winnipeg, Manitoba with three years of
          self-initiated experience. I'm currently seeking an internship or
          junior role that will utilize and expand my existing knowledge and
          skillset.
        </p>
      </Layout>
    </>
  );
}
