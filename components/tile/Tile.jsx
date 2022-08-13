import styles from './Tile.module.css';

const Tile = ({ active, color, tile }) => {
  const onTileClick = () => {
    console.log('Tile clicked!');
  };
  return (
    // <div className={styles.Tile}>
    <button
      style={{ backgroundColor: color }}
      className={styles.Tile}
      onClick={onTileClick}
    >
      {tile?.title}
    </button>
    // </div>
  );
};

export default Tile;
