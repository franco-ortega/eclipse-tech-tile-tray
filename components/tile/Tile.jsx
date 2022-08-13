import styles from './Tile.module.css';

const Tile = ({ active, color, tile }) => {
  const onTileClick = () => {
    console.log('Tile clicked!');
    alert(`You have selected ${tile.title}`);
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
