import Head from 'next/head';
import Header from '../components/Header.js';
import Layout from '../components/Layout.js';
import styles from '../styles/style.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tanner Wiltshire | Home</title>
        <link type="text/css" rel="stylesheet" href="style.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Layout>
        <p>this is the child of layout</p>
      </Layout>
    </>
  );
}
