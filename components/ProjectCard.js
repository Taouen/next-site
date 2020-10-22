import Link from 'next/link';
import styles from '../styles/projectcard.module.css';

export default function ProjectCard(props) {
  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>{props.title}</h2>

      <p>{props.desc}</p>
      <Link href={props.github}>
        <a>Check out the code on Github</a>
      </Link>
    </div>
  );
}
