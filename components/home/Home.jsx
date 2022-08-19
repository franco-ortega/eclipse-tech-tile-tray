import { useEffect, useState } from 'react';
import { getData } from '../../services/request';
import NewGameButton from '../buttons/NewGameButton';
import TrayList from '../trayList/TrayList';
import styles from './Home.module.css';

const Home = () => {
  const [trays, setTrays] = useState([]);

  useEffect(async () => {
    const response = await getData('/api/trays');
    await setTrays(response);
  }, []);

  return (
    <div className={styles.Home}>
      <section>
        <NewGameButton length={trays.length} />
        <TrayList trays={trays} />
      </section>
    </div>
  );
};

export default Home;
