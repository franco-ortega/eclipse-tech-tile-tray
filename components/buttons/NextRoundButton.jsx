import { useRouter } from 'next/router';
import ButtonContainer from './ButtonContainer';
import Button from './Button';

const NextRoundButton = ({ id }) => {
  const router = useRouter();

  console.log(id);

  const onNewRoundClick = () => {
    router.push(`/new-round/${id}`);
  };

  const text = 'Next Round';

  return (
    <ButtonContainer>
      <Button onButtonClick={onNewRoundClick} text={text} />
    </ButtonContainer>
  );
};

export default NextRoundButton;
