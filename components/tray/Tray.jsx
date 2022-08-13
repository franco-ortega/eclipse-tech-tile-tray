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
  return (
    <div className={styles.Tray}>
      {name ? { name } : 'Display'}
      <Row active={active} tech={rows.military} />
      <div>Row 2</div>
      <div>Row 3</div>
      <div>Row 4</div>
      {!active && (
        <>
          <div>Row 5</div>
          <div>Row 6</div>
        </>
      )}
    </div>
  );
};

export default Tray;
