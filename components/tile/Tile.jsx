import { useTrayContext } from '../../context/trayContext';
import { putData } from '../../services/request';
import { updatePosition } from '../../utils/updatePosition';
import styles from './Tile.module.css';

const Tile = ({ active, category, color, tile }) => {
  const { tray, setTray } = useTrayContext();

  const onTileClick = active
    ? async () => {
        console.log('active!! :-D');
        const usedKey = `rows.${category}.tiles.$[element].used`;

        const usedUpdate = {
          tile,
          update: {
            [usedKey]: tile.used + 1
          }
        };

        await putData(`/api/trays?id=${tray._id}`, usedUpdate).then((res) =>
          setTray(res)
        );
      }
    : async () => {
        console.log('not active :(');
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
      <div>{tile.title}</div>
      <span>
        {!active
          ? `x${tile.limit - tile.selected}`
          : `x${tile.selected - tile.used}`}
      </span>
      <div>
        <p>{tile.cost.max}</p>
        <p>{tile.cost.min}</p>
      </div>
    </button>
  );
};

export default Tile;
