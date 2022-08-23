import { useRouter } from 'next/router';
import Button from './Button';
import ButtonContainer from './ButtonContainer';

const StartButton = () => {
  const router = useRouter();
  console.log(router);

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
