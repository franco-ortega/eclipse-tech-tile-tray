import { useEffect, useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [trays, setTrays] = useState([]);

  useEffect(async () => {
    await fetch('http://localhost:3000/api/trays')
      .then((res) => res.json())
      .then((res) => setTrays(res));
  }, []);

  const onSelectGame = async (e) => {
    console.log('selected: ', e.target.value);
    await fetch(`http://localhost:3000/api/trays/?id=${e.target.value}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div className={styles.Home}>
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
    </div>
  );
};

export default Home;
