import Head from 'next/head';
import Layout from '../components/Layout.js';
import styles from '../styles/style.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tanner Wiltshire | Home</title>
        <link type="text/css" rel="stylesheet" href="style.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <p>
          Hi, I'm Tanner. I'm a Junior Software Developer with 6+ months
          self-initiated experience. I'm currently seeking an internship or
          junior role that will utilize and expand my existing knowledge and
          skillset.
        </p>
      </Layout>
    </>
  );
}
