import { useRouter } from 'next/router';
import Button from './Button';

const StartGameButton = () => {
  const router = useRouter();

  const onStartGameClick = () => {
    console.log('start game!!');
    router.push('/play-game');
  };

  const text = 'Start Game';

  return <Button onButtonClick={onStartGameClick} text={text} />;
};

export default StartGameButton;
