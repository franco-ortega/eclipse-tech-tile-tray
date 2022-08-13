import { useEffect, useState } from 'react';
import Tray from '../tray/Tray';
import tray from '../../data/tray.json';
import styles from './Home.module.css';

const Home = () => {
  const [trays, setTrays] = useState([]);
  const [game, setGame] = useState(null);

  useEffect(async () => {
    const response = await fetch('http://localhost:3000/api/trays').then(
      (res) => res.json()
    );

    setTrays(response);
  }, []);

  const onSelectGame = async (e) => {
    console.log('selected: ', e.target.value);
    const response = await fetch(
      `http://localhost:3000/api/trays/?id=${e.target.value}`
    ).then((res) => res.json());

    setGame(response);
  };

  return (
    <div className={styles.Home}>
      <section>
        <button>New Game</button>
        <select name='trays' id='trays' onChange={onSelectGame}>
          <option value=''>Select Game</option>
          {trays &&
            trays.map((tray) => (
              <option key={tray._id} value={tray._id}>
                {tray.name}
              </option>
            ))}
        </select>
      </section>
      <Tray active={false} rows={tray.rows} />
    </div>
  );
};

export default Home;
