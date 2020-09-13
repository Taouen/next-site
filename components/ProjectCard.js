import Link from 'next/link';
import styles from '../styles/projectcard.module.css';

export default function ProjectCard(props) {
  return (
    <div className={styles.card}>
      <Link href={props.href}>
        <a>
          <h2>{props.title}</h2>
        </a>
      </Link>
      <p>{props.desc}</p>
      <Link href={props.github}>
        <a>Check out the code on Github</a>
      </Link>
    </div>
  );
}
