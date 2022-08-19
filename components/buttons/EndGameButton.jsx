import { useRouter } from 'next/router';
import Button from './Button';
import ButtonContainer from './ButtonContainer';
import styles from './ButtonContainer.module.css';

const EndGameButton = () => {
  const router = useRouter();

  const onEndButtonClick = () => {
    router.push('/');
  };

  const text = 'End Game';

  return (
    <ButtonContainer>
      <Button onButtonClick={onEndButtonClick} text={text} />
    </ButtonContainer>
  );
};

export default EndGameButton;
