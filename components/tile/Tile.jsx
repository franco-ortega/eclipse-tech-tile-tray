import styles from './Tile.module.css';

const Tile = ({ tile }) => {
  const onTileClick = () => {
    console.log('Tile clicked!');
  };
  return (
    <div className={styles.Tile}>
      <button onClick={onTileClick}>{tile?.title}</button>
    </div>
  );
};

export default Tile;
