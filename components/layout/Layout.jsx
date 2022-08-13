import Head from 'next/head';
import Header from '../header/Header';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>Eclipse: Tech Tile Tray</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
