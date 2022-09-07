import { useState } from 'react';
import { useTrayContext } from '../../context/trayContext';
import { putData } from '../../services/request';
import {
  availableTiles,
  availableSortedTiles
} from '../../utils/filterAndSort';
import { updatePosition } from '../../utils/updatePosition';
import styles from './Tile.module.css';

const Tile = ({ active, category, color, tile }) => {
  const { tray, setTray } = useTrayContext();
  const [loadingTile, setLoadingTile] = useState(false);

  const onTileClick = active
    ? async () => {
        const usedKey = `rows.${category}.tiles.$[element].used`;
        const positionKey = `rows.${category}.tiles.$[element].position`;

        const usedUpdate = {
          tile,
          update: !(category === 'rare')
            ? {
                [usedKey]: tile.used + 1
              }
            : {
                [usedKey]: tile.used + 1,
                [positionKey]: null
              }
        };

        setLoadingTile(true);

        await putData(`/api/trays/${tray._id}`, usedUpdate).then((res) => {
          res.rows.military.tiles = availableTiles(res.rows.military.tiles);
          res.rows.grid.tiles = availableTiles(res.rows.grid.tiles);
          res.rows.nano.tiles = availableTiles(res.rows.nano.tiles);
          res.rows.rare.tiles = availableSortedTiles(res.rows.rare.tiles);
          setTray(res);
          setLoadingTile(false);
        });
      }
    : async () => {
        const selectedKey = `rows.${category}.tiles.$[element].selected`;
        const positionKey = `rows.${category}.tiles.$[element].position`;

        const currentPosition = tile.position ? tile.position : null;
        const rareTiles = tray.rows.rare.tiles;

        const selectedUpdate = {
          tile,
          update: currentPosition
            ? {
                [selectedKey]: tile.selected + 1
              }
            : {
                [selectedKey]: tile.selected + 1,
                [positionKey]: updatePosition(rareTiles)
              }
        };

        setLoadingTile(true);

        await putData(`/api/trays/${tray._id}`, selectedUpdate).then((res) =>
          setTray(res)
        );
        setLoadingTile(false);
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
        {loadingTile
          ? '...'
          : !active
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
