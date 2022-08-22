import Row from '../row/Row';
import styles from './Tray.module.css';

const Tray = ({ active, rows }) => {
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
