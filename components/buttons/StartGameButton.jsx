import { useRouter } from 'next/router';
import Button from './Button';
import ButtonContainer from './ButtonContainer';
import styles from './ButtonContainer.module.css';

const StartGameButton = ({ id }) => {
  const router = useRouter();

  const onStartGameClick = () => {
    router.push(`/play-game/${id}`);
  };

  const text = 'Start Game';

  return (
    <ButtonContainer>
      <Button onButtonClick={onStartGameClick} text={text} />
    </ButtonContainer>
  );
};

export default StartGameButton;
