import Link from 'next/link';
import styles from '../styles/projectcard.module.css';

export default function ProjectCard(props) {
  return (
    <div className={styles.card}>
      <Link href={props.href}>
        <h2>{props.title}</h2>
      </Link>
    </div>
  );
}
