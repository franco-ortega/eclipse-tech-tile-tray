import { useRouter } from 'next/router';
import { verifyTrayId } from '../../utils/verifyTrayId';
import Button from './Button';
import ButtonContainer from './ButtonContainer';

const StartRoundButton = ({ activeTrayId }) => {
  const router = useRouter();

  const onStartRoundClick = () => {
    const id = verifyTrayId(activeTrayId);
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
