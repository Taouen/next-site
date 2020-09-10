import Head from 'next/head';
import Layout from '../components/Layout.js';
import styles from '../styles/style.module.css';

/* Issues
  - Mobile (iOS): in landscape, font size of text gets larger (only text within this file, other components are not affected)
  - Document language is currently undeclared - need this for accessibility

*/

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
        <h1 className={styles.h1}>Hi, my name is Tanner Wiltshire.</h1>
        <p className={styles.p}>
          I'm a Junior Software Developer with 6+ months self-initiated
          experience. I'm currently seeking an internship or junior role that
          will utilize and expand my existing knowledge and skillset.
        </p>
      </Layout>
    </>
  );
}
