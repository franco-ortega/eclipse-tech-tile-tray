import { useEffect, useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [trays, setTrays] = useState([]);

  useEffect(async () => {
    await fetch('http://localhost:3000/api/trays')
      .then((res) => res.json())
      .then((res) => setTrays(res));
  }, []);

  return (
    <div className={styles.Home}>
      <button>New Game</button>
      <select name='trays' id='trays'>
        <option value=''>Select Game</option>
        {trays &&
          trays.map((tray) => <option key={tray._id}>{tray.name}</option>)}
      </select>
    </div>
  );
};

export default Home;
