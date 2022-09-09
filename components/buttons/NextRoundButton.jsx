import { useRouter } from 'next/router';
import ButtonContainer from './ButtonContainer';
import Button from './Button';
import { useTrayContext } from '../../context/trayContext';
import { incrementRound } from '../../utils/incrementRound';

const NextRoundButton = () => {
  const router = useRouter();
  const { tray, setTray, setLoading } = useTrayContext();

  const onNewRoundClick = () => {
    setLoading(true);
    if (!router.route.includes('new-game')) incrementRound(tray, setTray);
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
