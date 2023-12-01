import Link from 'next/link';
import styles from '../styles/header.module.css';

const pages = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Blog',
    link: 'https://blog.tannerwiltshire.com',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
];

const Header = () => (
  <header className={styles.header}>
    <ul className={styles.navigation}>
      {pages.map((page, index) => {
        return (
          <li key={index}>
            <Link href={page.link}>
              <a>{page.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  </header>
);

export default Header;
