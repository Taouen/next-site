import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import socialMedia from '../socialMedia';

const year = new Date();

const Footer = () => (
  <footer className={styles.footer}>
    <ul>
      {socialMedia.map((item) => {
        return (
          <li key={item.name}>
            <Link href={item.url}>
              <a>{item.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
    © {year.getFullYear()} Tanner Wiltshire
  </footer>
);

export default Footer;
