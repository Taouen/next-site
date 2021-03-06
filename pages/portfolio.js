import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/portfolio.module.css';
import Head from 'next/head';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Tanner Wiltshire | Portfolio</title>
      </Head>
      <Layout>
        <h1 className={styles.heading}>Projects</h1>
        <div className={styles.projects}>
          <ProjectCard
            desc="Ongoing hobby project. A tool to aid Magic: The Gathering players determine what cards may be in their opponent's hand"
            url="http://mtgasniffer.tannerwiltshire.com"
            github="https://github.com/Taouen/snifferMtga"
            title="Magic: The Gathering Hand Sniffer"
          />
          <ProjectCard
            desc="Website for a small business run by an esthetician. Built with Next.js and TailwindCSS, using content from Contentful CMS."
            url="http://www.brettondoesnails.com"
            title="brettondoesnails.com"
            github="https://github.com/Taouen/bretton-does-nails"
          />
          <ProjectCard
            desc="A side project created for users to choose meals for a fictional weekly meal kit service."
            github="https://github.com/Taouen/gobble"
            title="Gobble"
          />
        </div>
      </Layout>
    </>
  );
}
