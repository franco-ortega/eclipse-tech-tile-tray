import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { getData } from '../../services/request';
import NewGameButton from '../buttons/NewGameButton';

const Home = () => {
  const [trays, setTrays] = useState([]);
  const [game, setGame] = useState(null);

  useEffect(async () => {
    const response = await getData('/api/trays');

    await setTrays(response);
  }, []);

  const onSelectGame = async (e) => {
    const response = await getData(`/api/trays/?id=${e.target.value}`);

    setGame(response);

    alert(
      `You have selected ${response.name}. Still working on displaying this info.`
    );
  };

  return (
    <div className={styles.Home}>
      <section>
        <NewGameButton />
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
    </div>
  );
};

export default Home;
