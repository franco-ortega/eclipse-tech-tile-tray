import { useEffect } from 'react';
import { useTrayContext } from '../../context/trayContext';
import NewGameButton from '../buttons/NewGameButton';
import Loading from '../loading/Loading';
import TrayList from '../trayList/TrayList';
import styles from './Home.module.css';

const Home = ({ data }) => {
  const { loading, setLoading } = useTrayContext();

  useEffect(() => {
    if (data) setLoading(false);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className={styles.Home}>
      <NewGameButton length={data.length} />
      <TrayList data={data} />
    </div>
  );
};

export default Home;
