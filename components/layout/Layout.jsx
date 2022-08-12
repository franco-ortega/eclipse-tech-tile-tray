import Head from 'next/head';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>Eclipse: Tech Tile Tray</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <header>
        <h1>Eclipse</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
