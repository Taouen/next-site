import styles from '../styles/Layout.module.css';
import Header from './Header.js';
import Footer from './Footer';
import Head from 'next/head';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Tanner Wiltshire | Home</title>
          <html lang="en-us" />
          <link type="text/css" rel="stylesheet" href="style.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className={styles.container}>
          <Header />
          <main className={styles.main}>{this.props.children}</main>
          <Footer />
        </div>
      </>
    );
  }
}

export default Layout;
