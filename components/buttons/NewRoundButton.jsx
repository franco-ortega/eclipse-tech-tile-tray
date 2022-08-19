import { useRouter } from 'next/router';
import Button from './Button';
import styles from './ButtonContainer.module.css';

const NewRoundButton = () => {
  const router = useRouter();

  const onNewRoundClick = () => {
    router.push('/new-round');
  };

  const text = 'New Round';

  return (
    <div className={styles.ButtonContainer}>
      <Button onButtonClick={onNewRoundClick} text={text} />
    </div>
  );
};

export default NewRoundButton;
