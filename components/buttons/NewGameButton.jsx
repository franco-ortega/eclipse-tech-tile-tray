import { useRouter } from 'next/router';
import { useTrayContext } from '../../context/trayContext';
import { postData } from '../../services/request';
import { setLocalStorage } from '../../utils/localStorage';
import trayData from '../../data/tray.json';
import Button from './Button';
import ButtonContainer from './ButtonContainer';

const NewGameButton = ({ length }) => {
  const { setActiveTrayId } = useTrayContext();
  const router = useRouter();

  const onNewGameClick = async () => {
    await postData('/api/trays', {
      ...trayData,
      name: `Game #${length + 1}`,
      date: new Date()
    }).then((res) => {
      setLocalStorage('ACTIVE_TRAY_ID', res.insertedId);
      setActiveTrayId(res.insertedId);
    });

    router.push('/new-game');
  };

  const text = 'New Game';

  return (
    <ButtonContainer>
      <Button onButtonClick={onNewGameClick} text={text} />
    </ButtonContainer>
  );
};

export default NewGameButton;
