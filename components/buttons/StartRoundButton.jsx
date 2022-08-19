import { useRouter } from 'next/router';
import Button from './Button';
import ButtonContainer from './ButtonContainer';

const StartRoundButton = ({ id }) => {
  const router = useRouter();

  console.log('START ROUND BUTTON ID: ', id);

  const onStartRoundClick = () => {
    router.push(`/play-game/${id}`);
  };

  const text = 'Start Round';

  return (
    <ButtonContainer>
      <Button onButtonClick={onStartRoundClick} text={text} />
    </ButtonContainer>
  );
};

export default StartRoundButton;
