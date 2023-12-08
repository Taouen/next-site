import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import projects from '../projectInfo.js';
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
          {projects
            .filter((project) => project.active)
            .map((project) => {
              const { github, url, desc, title } = project;
              return (
                <ProjectCard
                  key={project.title}
                  github={github}
                  desc={desc}
                  title={title}
                  url={url}
                />
              );
            })}
        </div>
      </Layout>
    </>
  );
}
