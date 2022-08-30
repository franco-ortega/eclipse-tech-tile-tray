import { useRouter } from 'next/router';
import { postData } from '../../services/request';
import { useTrayContext } from '../../context/trayContext';
import { setLocalStorage } from '../../utils/localStorage';
import trayData from '../../data/tray.json';
import ButtonContainer from './ButtonContainer';
import Button from './Button';
import { customizeTitle } from '../../utils/customizeTitle';

const NewGameButton = ({ length }) => {
  const { setActiveTrayId } = useTrayContext();
  const router = useRouter();

  const text = 'New Game';

  const onNewGameClick = async () => {
    const defaultTitle = `Game #${length + 1}`;
    const customTitle = customizeTitle(defaultTitle);

    if (customTitle) {
      const id = await postData('/api/trays', {
        ...trayData,
        name: customTitle,
        date: new Date()
      }).then((res) => {
        setActiveTrayId(res.insertedId);
        setLocalStorage('ACTIVE_TRAY_ID', res.insertedId);
        return res.insertedId;
      });

      router.push(`/new-game/${id}`);
    }
  };

  return (
    <ButtonContainer>
      <Button onButtonClick={onNewGameClick} text={text} />
    </ButtonContainer>
  );
};

export default NewGameButton;
