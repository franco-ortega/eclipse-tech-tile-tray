import { useRouter } from 'next/router';
import Button from './Button';
import styles from './ButtonContainer.module.css';

const StartRoundButton = () => {
  const router = useRouter();

  const onStartRoundClick = () => {
    router.push('/play-game');
  };

  const text = 'Start Round';

  return (
    <div className={styles.ButtonContainer}>
      <Button onButtonClick={onStartRoundClick} text={text} />
    </div>
  );
};

export default StartRoundButton;
