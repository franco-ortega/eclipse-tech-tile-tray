import styles from './Row.module.css';

const Row = ({ active, tech }) => {
  console.log(active, tech);

  const slots = [];

  for (let i = 0; i < tech.length; i++) {
    slots.push(i);
  }

  return (
    <ul className={styles.Row}>
      {tech && slots.map((slot) => <li key={slot}>{(slot + 1) * 2}</li>)}
    </ul>
  );
};

export default Row;
