import { useTrayContext } from '../../context/trayContext';
import { getData, putData } from '../../services/request';
import { getLocalStorage } from '../../utils/localStorage';
import styles from './Tile.module.css';

const Tile = ({ active, category, color, tile }) => {
  const { activeTrayId, tray, setTray } = useTrayContext();

  const onTileClick = async () => {
    console.log(tile.title);
    const id = activeTrayId.length
      ? activeTrayId
      : getLocalStorage('ACTIVE_TRAY_ID');

    let newPosition = 0;
    if (!tile.position) {
      console.log('This tile has no position');

      const total = tray.rows.rare.tiles.reduce((accumulated, current) => {
        console.log(current);
        if (current.position) accumulated = accumulated + 1;
        return accumulated;
      }, 0);

      newPosition = total + 1;
      console.log(newPosition);
    }

    const rarePosition = `rows.rare.tiles.$[element].position`;

    const index = tile.position ? tile.position - 1 : null;

    const selected = index
      ? `rows.${category}.tiles.${index}.selected`
      : `rows.${category}.tiles.$[element].selected`;

    const update = index
      ? [
          {
            [selected]: tile.selected + 1
          }
        ]
      : [
          {
            [selected]: tile.selected + 1,
            [rarePosition]: newPosition
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
