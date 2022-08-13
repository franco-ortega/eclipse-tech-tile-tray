import styles from './Slot.module.css';

const Slot = ({ active, tile }) => {
  return (
    <li className={styles.Slot}>
      {!active && <div>{tile && tile.title}</div>}
    </li>
  );
};

export default Slot;
