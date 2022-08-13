import styles from './Tile.module.css';

const Tile = ({ active, color, tile }) => {
  const onTileClick = () => {
    console.log('Tile clicked!');
  };
  return (
    <button
      style={{ backgroundColor: color }}
      className={styles.Tile}
      onClick={onTileClick}
    >
      <div>{tile?.title}</div>
    </button>
  );
};

export default Tile;