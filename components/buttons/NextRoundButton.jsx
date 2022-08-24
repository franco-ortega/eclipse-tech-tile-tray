import { useRouter } from 'next/router';
import ButtonContainer from './ButtonContainer';
import Button from './Button';

const NextRoundButton = () => {
  const router = useRouter();

  const onNewRoundClick = () => {
    router.push(`/new-round/${router.query.id}`);
  };

  const text = 'Next Round';

  return (
    <ButtonContainer>
      <Button onButtonClick={onNewRoundClick} text={text} />
    </ButtonContainer>
  );
};

export default NextRoundButton;
