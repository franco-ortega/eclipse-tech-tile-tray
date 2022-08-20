import { useRouter } from 'next/router';
import Button from './Button';
import ButtonContainer from './ButtonContainer';

const StartRoundButton = ({ id }) => {
  const router = useRouter();

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
