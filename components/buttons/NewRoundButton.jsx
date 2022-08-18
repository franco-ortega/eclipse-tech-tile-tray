import { useRouter } from 'next/router';
import Button from './Button';
import styles from './NewRoundButton.module.css';

const NewRoundButton = () => {
  const router = useRouter();

  const onNewRoundClick = () => {
    router.push('/new-round');
  };

  const text = 'New Round';

  return (
    <div className={styles.NewRoundButton}>
      <Button onButtonClick={onNewRoundClick} text={text} />
    </div>
  );
};

export default NewRoundButton;
