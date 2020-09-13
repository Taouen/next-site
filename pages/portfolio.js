import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/portfolio.module.css';

export default function Portfolio() {
  return (
    <Layout>
      <h1>Projects</h1>
      <div className={styles.projects}>
        <ProjectCard
          desc="A side project created for users to choose meals for a fictional weekly meal kit service."
          github="https://github.com/Taouen/gobble"
          href="http://gobble.vercel.app"
          title="Gobble"
        />
      </div>
    </Layout>
  );
}
