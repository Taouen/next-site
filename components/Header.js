import Link from 'next/link';
import styles from '../styles/header.module.css';

const Header = () => (
  <header className={styles.header}>
    <ul className={styles.navigation}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="https://medium.com/@tannerwiltshire">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
