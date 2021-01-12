import Head from 'next/head';
import '../styles/reset.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="tannerwiltshire.com" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
