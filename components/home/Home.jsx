import { useEffect, useState } from 'react';
const { NEXT_PUBLIC_API_URL } = process.env;
import { useRouter } from 'next/router';
import trayData from '../../data/tray.json';
import styles from './Home.module.css';
import { useTrayContext } from '../../context/trayContext';
import { setLocalStorage } from '../../utils/localStorage';
import { getData, postData } from '../../services/request';

const Home = () => {
  const [trays, setTrays] = useState([]);
  const [game, setGame] = useState(null);
  const { setActiveTrayId } = useTrayContext();
  const router = useRouter();

  useEffect(async () => {
    const response = await getData('/api/trays');

    await setTrays(response);
  }, []);

  const onNewGameClick = async () => {
    console.log('new game!!');

    await postData('/api/trays', {
      ...trayData,
      name: `Tray #${trays.length + 1}`,
      date: new Date()
    });

    router.push('/new-game');
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
    </div>
  );
};

export default Home;
