import { useRouter } from 'next/router';
import ButtonContainer from './ButtonContainer';
import Button from './Button';

const HomeButton = () => {
  const router = useRouter();

  const onEndButtonClick = () => {
    router.push('/');
  };

  const text = 'Home';

  return (
    <ButtonContainer>
      <Button onButtonClick={onEndButtonClick} text={text} />
    </ButtonContainer>
  );
};

export default HomeButton;
