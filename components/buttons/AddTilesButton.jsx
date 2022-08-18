import { useRouter } from 'next/router';
import Button from './Button';
import styles from './AddTilesButton.module.css';

const AddTilesButton = () => {
  const router = useRouter();

  const onAddTileClick = () => {
    router.push('/add-tiles');
  };

  const text = 'Add Tiles';

  return (
    <div className={styles.AddTilesButton}>
      <Button onButtonClick={onAddTileClick} text={text} />
    </div>
  );
};

export default AddTilesButton;
