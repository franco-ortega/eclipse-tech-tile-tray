import { useEffect, useState } from 'react';
import NewGameButton from '../buttons/NewGameButton';
import TrayList from '../trayList/TrayList';
import styles from './Home.module.css';

const Home = ({ data }) => {
  const [trays, setTrays] = useState([]);
  console.log(data);

  useEffect(() => {
    setTrays(data);
  }, []);

  return (
    <div className={styles.Home}>
      <NewGameButton length={trays.length} />
      <TrayList trays={trays} />
    </div>
  );
};

export default Home;
