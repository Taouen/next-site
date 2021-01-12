import Layout from '../components/Layout.js';
import styles from '../styles/index.module.css';
import Head from 'next/head';

/* Commit Chnages 

  - added meta description to Layout.js
  - added main element to index.js
  - fixed page titles
  - added about page

*/
/* Issues

  

*/

export default function Home() {
  return (
    <>
      <Head>
        <title>Tanner Wiltshire | Home</title>
      </Head>

      <Layout>
        <main>
          <h1>Hi, my name is Tanner Wiltshire.</h1>
          <p className={styles.intro}>
            I'm a Junior Software Developer from Winnipeg, Manitoba with one
            year of self-initiated experience. I'm currently seeking an
            internship or junior role that will utilize and expand my existing
            knowledge and skillset.
          </p>
        </main>
      </Layout>
    </>
  );
}
