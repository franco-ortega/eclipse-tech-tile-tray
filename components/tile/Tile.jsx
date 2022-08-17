import { useTrayContext } from '../../context/trayContext';
import { putData } from '../../services/request';
import { updatePosition } from '../../utils/updatePosition';
import styles from './Tile.module.css';

const Tile = ({ active, category, color, tile }) => {
  const { tray, setTray } = useTrayContext();

  const onTileClick = async () => {
    const selectedKey = `rows.${category}.tiles.$[element].selected`;
    const positionKey = `rows.${category}.tiles.$[element].position`;

    const originalPosition = tile.position ? tile.position : null;
    const tiles = tray.rows.rare.tiles;
    const newPosition = updatePosition(originalPosition, tiles);

    const selectedUpdate = {
      tile,
      update: originalPosition
        ? {
            [selectedKey]: tile.selected + 1
          }
        : {
            [selectedKey]: tile.selected + 1,
            [positionKey]: newPosition
          }
    };

    await putData(`/api/trays?id=${tray._id}`, selectedUpdate).then((res) =>
      setTray(res)
    );
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
