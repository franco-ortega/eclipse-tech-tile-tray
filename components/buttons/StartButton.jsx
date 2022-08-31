import { useRouter } from 'next/router';
import ButtonContainer from './ButtonContainer';
import Button from './Button';
import { useTrayContext } from '../../context/trayContext';

const StartButton = () => {
  const router = useRouter();
  const { setLoading } = useTrayContext();

  const text = router.route.includes('new-game') ? 'Start Game' : 'Start Round';

  const onStartRoundClick = () => {
    setLoading(true);
    router.push(`/play-game/${router.query.id}`);
  };

  return (
    <ButtonContainer>
      <Button onButtonClick={onStartRoundClick} text={text} />
    </ButtonContainer>
  );
};

export default StartButton;
