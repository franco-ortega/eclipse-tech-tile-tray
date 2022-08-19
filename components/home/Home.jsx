import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTrayContext } from '../../context/trayContext';
import { getData } from '../../services/request';
import { setLocalStorage } from '../../utils/localStorage';
import NewGameButton from '../buttons/NewGameButton';
import styles from './Home.module.css';

const Home = () => {
  const [trays, setTrays] = useState([]);
  const { setActiveTrayId } = useTrayContext();
  const router = useRouter();

  useEffect(async () => {
    const response = await getData('/api/trays');

    await setTrays(response);
  }, []);

  const onSelectGame = async (e) => {
    if (!e.target.value) alert('Please select a game.');

    const response = await getData(`/api/trays/?id=${e.target.value}`);

    setActiveTrayId(response._id);
    setLocalStorage('ACTIVE_TRAY_ID', response._id);

    const answer = confirm(
      `You have selected ${response.name}. Click OK to proceed.`
    );

    if (answer) router.push('/play-game');
    else alert('Please select another game.');
  };

  return (
    <div className={styles.Home}>
      <section>
        <NewGameButton />
        <select name='trays' id='trays' onChange={onSelectGame}>
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
        </select>
      </section>
    </div>
  );
};

export default Home;
