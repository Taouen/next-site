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
          store. The company had a mathematical formula that provided the
          spacing for items on a fixture.
        </p>
        <p>
          The problem: it takes time to manually measure the fixture and items,
          convert the fractions from the tape measure to decimals, do the math,
          then convert it back to fractions so you can measure it out on the
          fixture.
        </p>
        <p>
          The solution: I built a tool that has all the most common measurements
          built in. The user enters what fixture and items, and not only is the
          math done for you, you get a printable wireframe for the fixture with
          measurements indicated on it. That tool is now used by merchandising
          specialists across the country, as it saves up to 4-6 man hours per
          overnight.
        </p>

        <p>
          I've always been a quick learner. When I am struck by inspiration, no
          project remains out of my area of expertise for long. I enjoy the
          challenge of constantly learning something new.
        </p>

        <p>
          I live with my wife and dog in Winnipeg, Manitoba. I enjoy games (both
          tabletop and video varieties), fantasy novels, Star Wars, and Norse
          Mythology.
        </p>
      </Layout>
    </>
  );
}

export default About;
