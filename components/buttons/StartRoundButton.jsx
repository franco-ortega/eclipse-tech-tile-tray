import { useRouter } from 'next/router';
import Button from './Button';
import ButtonContainer from './ButtonContainer';
import styles from './ButtonContainer.module.css';

const StartRoundButton = () => {
  const router = useRouter();

  const onStartRoundClick = () => {
    router.push('/play-game');
  };

  const text = 'Start Round';

  return (
    <ButtonContainer>
      <Button onButtonClick={onStartRoundClick} text={text} />
    </ButtonContainer>
  );
};

export default StartRoundButton;
