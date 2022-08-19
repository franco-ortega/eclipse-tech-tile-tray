import { useRouter } from 'next/router';
import { useTrayContext } from '../../context/trayContext';
import { getData } from '../../services/request';
import { setLocalStorage } from '../../utils/localStorage';
import styles from './TrayList.module.css';

const TrayList = ({ trays }) => {
  const { setActiveTrayId } = useTrayContext();
  const router = useRouter();

  const onSelectGame = async (e) => {
    if (!e.target.value) {
      alert('Please select a game.');
      return;
    }

    const response = await getData(`/api/trays/?id=${e.target.value}`);

    const proceedToGame = confirm(
      `You have selected ${response.name}. Click OK to proceed.`
    );

    if (proceedToGame) {
      setActiveTrayId(response._id);
      setLocalStorage('ACTIVE_TRAY_ID', response._id);
      router.push('/play-game');
    } else alert('Please select another game.');
  };

  return (
    <select
      className={styles.TrayList}
      name='trays'
      id='trays'
      onChange={onSelectGame}
    >
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
  );
};

export default TrayList;
