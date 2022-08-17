import { useTrayContext } from '../../context/trayContext';
import { getData, putData } from '../../services/request';
import { getLocalStorage } from '../../utils/localStorage';
import styles from './Tile.module.css';

const Tile = ({ active, category, color, tile }) => {
  const { activeTrayId, setTray } = useTrayContext();

  const onTileClick = async () => {
    const id = activeTrayId.length
      ? activeTrayId
      : getLocalStorage('ACTIVE_TRAY_ID');

    const tray = await getData(`/api/trays/?id=${id}`);

    const index = tile.position - 1;
    const selected = `rows.${category}.tiles.${index}.selected`;

    const value = tray.rows[category].tiles[index].selected + 1;

    const update = {
      [selected]: value
    };

    await putData(`/api/trays?id=${id}`, update);

    await getData(`/api/trays/?id=${id}`).then((res) => setTray(res));
  };

  return (
    <button
      style={{ backgroundColor: color }}
      className={styles.Tile}
      disabled={!active && tile.limit - tile.selected === 0}
      onClick={onTileClick}
    >
      <div>{tile.title}</div>x{tile.limit - tile.selected}
      <div>
        <p>{tile.cost.max}</p>
        <p>{tile.cost.min}</p>
      </div>
    </button>
  );
};

export default Tile;
