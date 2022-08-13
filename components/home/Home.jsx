import { useEffect, useState } from 'react';
const { NEXT_PUBLIC_API_URL } = process.env;
import { useRouter } from 'next/router';
import trayData from '../../data/tray.json';
import styles from './Home.module.css';
import { useTrayContext } from '../../context/trayContext';

const Home = () => {
  const [trays, setTrays] = useState([]);
  const [game, setGame] = useState(null);
  const { setActiveTrayId } = useTrayContext();
  const router = useRouter();

  useEffect(async () => {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/trays`).then(
      (res) => res.json()
    );

    await setTrays(response);
  }, []);

  const onNewGameClick = async () => {
    console.log('new game!!');
    await fetch(`${NEXT_PUBLIC_API_URL}/api/trays`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/josn'
      },
      body: JSON.stringify({
        ...trayData,
        name: `Tray #${trays.length + 1}`,
        date: new Date()
      })
    })
      .then((res) => res.json())
      .then((res) => setActiveTrayId(res.insertedId));
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
