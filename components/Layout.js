import styles from '../styles/Layout.module.css';
import Header from './Header.js';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
