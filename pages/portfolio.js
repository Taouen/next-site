import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/portfolio.module.css';

export default function Portfolio() {
  return (
    <Layout>
      <h1 className="h1">Projects</h1>
      <div className={styles.projects}>
        <ProjectCard title="Gobble" href="http://gobble.vercel.app">
          <p>
            A side project created for users to choose meals for a fictional
            weekly meal kit service.
          </p>
        </ProjectCard>
      </div>
    </Layout>
  );
}
