import { useRouter } from 'next/router';
import { clearLocalStorage } from '../../utils/localStorage';
import ButtonContainer from './ButtonContainer';
import Button from './Button';
import { useTrayContext } from '../../context/trayContext';

const EndGameButton = () => {
  const router = useRouter();
  const { setLoading } = useTrayContext();

  const onEndButtonClick = () => {
    setLoading(true);
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
