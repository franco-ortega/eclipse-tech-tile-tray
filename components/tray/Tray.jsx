import Row from '../row/Row';
import styles from './Tray.module.css';

const Tray = ({ active, name, rows }) => {
  // tray will render rows
  // -- 3 regular rows
  // -- 1 special row
  // -- -- or 3 special rows if "active" is false
  // rows will render tiles
  // tiles buttons will be disabled based on "active" prop

  // const firstRareTiles = rows.rare.tiles.slice(0, 7);
  // const firstRareRow = {
  //   ...rows.rare,
  //   tiles: firstRareTiles
  // };

  // const secondRareTiles = rows.rare.tiles.slice(7, 14);
  // const secondRareRow = {
  //   ...rows.rare,
  //   tiles: secondRareTiles
  // };

  // const thirdRareTiles = rows.rare.tiles.slice(14);
  // const thirdRareRow = {
  //   ...rows.rare,
  //   tiles: thirdRareTiles
  // };

  // console.log({ firstRareRow });
  // console.log({ secondRareRow });
  // console.log({ thirdRareRow });

  if (active) {
    console.log("let's filter these rare tiles!!!");
    rows.rare.tiles = rows.rare.tiles
      .filter((tile) => tile.position && tile.selected - tile.used)
      .sort((a, b) => a.position - b.position);
  }

  return (
    <div className={styles.Tray}>
      <Row active={active} tech={rows.military} />
      <Row active={active} tech={rows.grid} />
      <Row active={active} tech={rows.nano} />
      <Row
        active={active}
        tech={{
          ...rows.rare,
          tiles: rows.rare.tiles.slice(0, 7)
        }}
      />
      {!active && (
        <Row
          active={active}
          tech={{
            ...rows.rare,
            tiles: rows.rare.tiles.slice(7, 14)
          }}
        />
      )}
      {!active && (
        <Row
          active={active}
          tech={{
            ...rows.rare,
            tiles: rows.rare.tiles.slice(14)
          }}
        />
      )}
    </div>
  );
};

export default Tray;
