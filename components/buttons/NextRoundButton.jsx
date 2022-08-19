import { useRouter } from 'next/router';
import Button from './Button';
import ButtonContainer from './ButtonContainer';
import styles from './ButtonContainer.module.css';

const NextRoundButton = () => {
  const router = useRouter();

  const onNewRoundClick = () => {
    router.push('/new-round');
  };

  const text = 'Next Round';

  return (
    <ButtonContainer>
      <Button onButtonClick={onNewRoundClick} text={text} />
    </ButtonContainer>
  );
};

export default NextRoundButton;
