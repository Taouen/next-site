import Link from 'next/link';
import styles from '../styles/projectcard.module.css';

export default function ProjectCard({ github, title, desc, url }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>{title}</h2>

      <p>{desc}</p>
      <div className={styles.projectCardLinks}>
        {url && (
          <Link href={url}>
            <a className={styles.marginRight4}>Visit the site</a>
          </Link>
        )}
        {github && (
          <Link href={github}>
            <a>Check out the code on Github</a>
          </Link>
        )}
      </div>
    </div>
  );
}
