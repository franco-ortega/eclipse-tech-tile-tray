import { useRouter } from 'next/router';
import ButtonContainer from './ButtonContainer';
import Button from './Button';

const StartButton = () => {
  const router = useRouter();

  const text = router.route.includes('new-game') ? 'Start Game' : 'Start Round';

  const onStartRoundClick = () => {
    router.push(`/play-game/${router.query.id}`);
  };

  return (
    <ButtonContainer>
      <Button onButtonClick={onStartRoundClick} text={text} />
    </ButtonContainer>
  );
};

export default StartButton;
