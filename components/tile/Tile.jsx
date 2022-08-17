import { useTrayContext } from '../../context/trayContext';
import { getData, putData } from '../../services/request';
import { getLocalStorage } from '../../utils/localStorage';
import styles from './Tile.module.css';

const Tile = ({ active, category, color, tile }) => {
  const { activeTrayId, setTray } = useTrayContext();

  const onTileClick = async () => {
    console.log(tile.title);
    const id = activeTrayId.length
      ? activeTrayId
      : getLocalStorage('ACTIVE_TRAY_ID');

    const index = tile.position ? tile.position - 1 : null;
    const selected = index
      ? `rows.${category}.tiles.${index}.selected`
      : `rows.${category}.tiles.$[element].selected`;

    const value = tile.selected + 1;

    const update = index
      ? [
          {
            [selected]: value
          }
        ]
      : [
          {
            [selected]: value
          },
          { arrayFilters: [{ element: tile }] }
        ];

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
