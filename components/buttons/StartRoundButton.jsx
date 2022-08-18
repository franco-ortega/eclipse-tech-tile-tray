import { useRouter } from 'next/router';
import Button from './Button';
import styles from './StartRoundButton.module.css';

const StartRoundButton = () => {
  const router = useRouter();

  const onStartRoundClick = () => {
    router.push('/play-game');
  };

  const text = 'Start Round';

  return (
    <div className={styles.StartRoundButton}>
      <Button onButtonClick={onStartRoundClick} text={text} />
    </div>
  );
};

export default StartRoundButton;
