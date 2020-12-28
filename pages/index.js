import Layout from '../components/Layout.js';
import styles from '../styles/index.module.css';
/* Issues


*/

export default function Home() {
  return (
    <Layout>
      <h1>Hi, my name is Tanner Wiltshire.</h1>
      <p className={styles.intro}>
        I'm a Junior Software Developer with 1 year of self-initiated
        experience. I'm currently seeking an internship or junior role that will
        utilize and expand my existing knowledge and skillset.
      </p>
    </Layout>
  );
}
