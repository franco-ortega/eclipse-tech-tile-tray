import Head from 'next/head';
import Header from '../header/Header';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>Eclipse: Tech Tile Tray</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
