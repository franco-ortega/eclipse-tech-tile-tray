import { useRouter } from 'next/router';
import Button from './Button';
import styles from './StartGameButton.module.css';

const StartGameButton = () => {
  const router = useRouter();

  const onStartGameClick = () => {
    console.log('start game!!');
    router.push('/play-game');
  };

  const text = 'Start Game';

  return (
    <div className={styles.StartGameButton}>
      <Button onButtonClick={onStartGameClick} text={text} />
    </div>
  );
};

export default StartGameButton;
