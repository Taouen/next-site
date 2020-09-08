import Link from 'next/link';

const Header = () => {
  <header className="header">
    <a href="index.html">
      <h2>Tanner Wiltshire</h2>
    </a>
    <nav>
      <a className={styles.link} href="portfolio.html">
        Portfolio
      </a>
      <a
        className={styles.link}
        href="https://medium.com/@tannerwiltshire"
        target="_blank"
      >
        Blog
      </a>
    </nav>
  </header>;
};

export default Header;
