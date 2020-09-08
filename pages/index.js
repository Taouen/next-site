import Head from 'next/head';
import Header from '../components/header.js';
import styles from '../styles/style.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tanner Wiltshire | Home</title>
        <link type="text/css" rel="stylesheet" href="style.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat|Raleway&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.wrapper}>
        <Header />

        <main>
          <div className="main">
            <div className="content">
              <h1>Hi, I'm Tanner.</h1>
              <p>
                I like to build things and solve problems, so I am working to
                become a software developer.
              </p>
              <p>
                I don’t have a lot of experience yet, but I have a passion for
                learning and enjoy being challenged. Currently, I am developing
                skills with HTML, CSS, and JavaScript.
              </p>
              <p>This webpage will evolve with me as I grow in the process.</p>
            </div>
            <div className="social-media">
              <a href="https://www.facebook.com/tanner.wiltshire">
                <img src="images/facebook.png" alt="facebook" />
              </a>
              <a href="https://twitter.com/tannerwiltshire">
                <img src="images/twitter.png" alt="twitter" />
              </a>
              <a href="https://github.com/Taouen">
                <img src="images/github.png" alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/tanner-wiltshire-032133199/">
                <img src="images/linkedin.png" alt="linkedin" />
              </a>
            </div>
          </div>
          <div className="photo"></div>
        </main>

        <footer>
          <p>© 2020 Tanner Wiltshire</p>
        </footer>
      </div>
    </>
  );
}
