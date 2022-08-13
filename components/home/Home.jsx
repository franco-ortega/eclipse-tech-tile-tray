import { useEffect, useState } from 'react';
const { NEXT_PUBLIC_API_URL } = process.env;
import Tray from '../tray/Tray';
import tray from '../../data/tray.json';
import styles from './Home.module.css';

const Home = () => {
  const [trays, setTrays] = useState([]);
  const [game, setGame] = useState(null);

  useEffect(async () => {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/trays`).then(
      (res) => res.json()
    );

    await setTrays(response);
  }, []);

  const onNewGameClick = () => {
    console.log('new game!!');
    alert("This isn't working yet.");
  };

  const onSelectGame = async (e) => {
    console.log('selected: ', e.target.value);
    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/api/trays/?id=${e.target.value}`
    ).then((res) => res.json());

    setGame(response);

    alert(
      `You have selected ${response.name}. Still working on displaying this info.`
    );
  };

  return (
    <div className={styles.Home}>
      <section>
        <button onClick={onNewGameClick}>New Game</button>
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
      <Tray active={false} name={tray.name} rows={tray.rows} />
    </div>
  );
};

export default Home;
