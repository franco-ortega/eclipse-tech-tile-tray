import Slot from '../slot/Slot';
import styles from './Row.module.css';

const Row = ({ active, tech }) => {
  const slots = [];

  // tech.tiles.sort((a, b) => {
  //   return a.position - b.position;
  // });

  for (let i = 0; i < tech.length; i++) {
    slots.push(i + 1);
  }

  const findTile = (position, tiles) => {
    if (tech.category === 'rare') return tiles[position - 1];
    return tiles.find((tile) => tile.position === position);
  };

  return (
    <ul className={styles.Row}>
      {tech &&
        slots.map((slot) => (
          <Slot
            key={slot}
            active={active}
            category={tech.category}
            color={tech.color}
            tile={findTile(slot, tech.tiles)}
          />
        ))}
    </ul>
  );
};

export default Row;
