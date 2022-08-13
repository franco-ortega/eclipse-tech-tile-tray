import Layout from '../components/layout/Layout';
import { TrayProvider } from '../context/trayContext';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <TrayProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TrayProvider>
  );
}
