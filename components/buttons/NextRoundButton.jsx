import { useRouter } from 'next/router';
import ButtonContainer from './ButtonContainer';
import Button from './Button';
import { useTrayContext } from '../../context/trayContext';

const NextRoundButton = () => {
  const router = useRouter();
  const { setLoading } = useTrayContext();

  const onNewRoundClick = () => {
    setLoading(true);
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
