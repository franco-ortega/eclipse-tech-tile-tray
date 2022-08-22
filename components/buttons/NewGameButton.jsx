import { useRouter } from 'next/router';
import { postData } from '../../services/request';
import { useTrayContext } from '../../context/trayContext';
import { setLocalStorage } from '../../utils/localStorage';
import trayData from '../../data/tray.json';
import ButtonContainer from './ButtonContainer';
import Button from './Button';

const NewGameButton = ({ length }) => {
  const { setActiveTrayId } = useTrayContext();

  const router = useRouter();

  const onNewGameClick = async () => {
    const id = await postData('/api/trays', {
      ...trayData,
      name: `Game #${length + 1}`,
      date: new Date()
    }).then((res) => {
      setActiveTrayId(res.insertedId);
      setLocalStorage('ACTIVE_TRAY_ID', res.insertedId);
      return res.insertedId;
    });

    router.push(`/new-game/${id}`);
  };

  const text = 'New Game';

  return (
    <ButtonContainer>
      <Button onButtonClick={onNewGameClick} text={text} />
    </ButtonContainer>
  );
};

export default NewGameButton;
