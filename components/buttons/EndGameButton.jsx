import { useRouter } from 'next/router';
import { clearLocalStorage } from '../../utils/localStorage';
import ButtonContainer from './ButtonContainer';
import Button from './Button';

const EndGameButton = () => {
  const router = useRouter();

  const onEndButtonClick = () => {
    clearLocalStorage();
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
