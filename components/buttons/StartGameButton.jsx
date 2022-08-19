import { useRouter } from 'next/router';
import Button from './Button';
import styles from './ButtonContainer.module.css';

const StartGameButton = () => {
  const router = useRouter();

  const onStartGameClick = () => {
    router.push('/play-game');
  };

  const text = 'Start Game';

  return (
    <div className={styles.ButtonContainer}>
      <Button onButtonClick={onStartGameClick} text={text} />
    </div>
  );
};

export default StartGameButton;
