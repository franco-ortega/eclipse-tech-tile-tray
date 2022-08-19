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
        {/* <select name='trays' id='trays' onChange={onSelectGame}>
          <option value=''>Select Game</option>
          {trays &&
            trays
              .sort((a, b) => {
                if (a.date > b.date) return -1;
                if (a.date < b.date) return 1;
                return 0;
              })
              .map((tray) => (
                <option key={tray._id} value={tray._id}>
                  {tray.name}
                </option>
              ))}
        </select> */}
      </section>
    </div>
  );
};

export default Home;
