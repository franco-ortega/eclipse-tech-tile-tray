import Row from '../row/Row';
import styles from './Tray.module.css';

const Tray = ({ active, name, rows }) => {
  // tray will render rows
  // -- 3 regular rows
  // -- 1 special row
  // -- -- or 3 special rows if "active" is false
  // rows will render tiles
  // tiles buttons will be disabled based on "active" prop

  // console.log(rows);

  const secondRareTiles = rows.rare.tiles.slice(7, 14);
  const secondRareRow = {
    ...rows.rare,
    tiles: secondRareTiles
  };

  const thirdRareTiles = rows.rare.tiles.slice(14);
  const thirdRareRow = {
    ...rows.rare,
    tiles: thirdRareTiles
  };

  return (
    <div className={styles.Tray}>
      <Row active={active} tech={rows.military} />
      <Row active={active} tech={rows.grid} />
      <Row active={active} tech={rows.nano} />
      <Row active={active} tech={rows.rare} />
      {!active && <Row active={active} tech={secondRareRow} />}
      {!active && <Row active={active} tech={thirdRareRow} />}
    </div>
  );
};

export default Tray;
