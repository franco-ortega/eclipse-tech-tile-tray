import { useTrayContext } from '../../context/trayContext';
import { putData } from '../../services/request';
import styles from './Tile.module.css';

const Tile = ({ active, category, color, tile }) => {
  const { tray, setTray } = useTrayContext();

  const onTileClick = async () => {
    const index = tile.position ? tile.position - 1 : null;

    const selected = `rows.${category}.tiles.$[element].selected`;
    const position = `rows.${category}.tiles.$[element].position`;

    let newPosition = 0;
    if (!tile.position) {
      console.log('This tile has no position');

      const total = tray.rows.rare.tiles.reduce((accumulated, current) => {
        if (current.position) accumulated = accumulated + 1;
        return accumulated;
      }, 0);

      newPosition = total + 1;
      console.log(newPosition);
    }

    const update = {
      tile,
      update: index
        ? {
            [selected]: tile.selected + 1
          }
        : {
            [selected]: tile.selected + 1,
            [position]: newPosition
          }
    };

    await putData(`/api/trays?id=${tray._id}`, update).then((res) =>
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
