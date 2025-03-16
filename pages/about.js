import Head from 'next/head';
import Layout from '../components/Layout.js';
import Image from 'next/image';
import styles from '../styles/about.module.css';

function About() {
  return (
    <>
      <Head>
        <title>Tanner Wiltshire | About</title>
      </Head>

      <Layout>
        <h1>I solve problems by building things.</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/images/me.png"
            alt="Tanner Wiltshire"
            width={350}
            height={350}
            priority="true"
          />
        </div>
        <p>Here's an example.</p>
        <p>
          I used to work on overnight visual merchandising projects for a retail
          store, where the company had a mathematical formula to determine item
          spacing on fixtures.
        </p>
        <p>
          The challenge: Manually measuring each fixture and item, converting
          fractions from a tape measure to decimals, performing the
          calculations, and then converting the results back to fractions was
          time-consuming and subject to human error.
        </p>
        <p>
          The solution: I built a tool with common measurements preloaded. Users
          simply selected the fixture and items, and the tool handled the
          calculations automatically — providing a printable wireframe labelled
          with measurements. While the tool is now obsolete, it was used by
          visual merchandising teams nationwide for six years, saving 4–6 people
          hours per merchandising change.
        </p>

        <p>
          I've always been a quick learner. When I am struck by inspiration, no
          project remains out of my area of expertise for long. I enjoy the
          challenge of constantly learning something new.
        </p>

        <p>
          I live with my wife, two children, and dog in Winnipeg, Manitoba,
          Canada. I'm a fan of fantasy novels, Star Wars, and science in
          general. My hobbies include playing Ultimate Frisbee, 3D printing, and
          playing Magic: The Gathering. I also enjoy games of any kind.
        </p>
      </Layout>
    </>
  );
}

export default About;
