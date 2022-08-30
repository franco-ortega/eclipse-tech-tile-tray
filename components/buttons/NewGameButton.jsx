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

  const text = 'New Game';

  const onNewGameClick = async () => {
    const defaultTitle = `Game #${length + 1}`;
    let customTitle = defaultTitle;

    do {
      if (customTitle.length > 12) {
        customTitle = defaultTitle;
        customTitle = prompt(
          'Please limit your title to a maximum of 12 characters.',
          customTitle
        );
      } else if (customTitle.length === 0) {
        customTitle = defaultTitle;
        customTitle = prompt(
          'Please enter a title (12 characters max).',
          customTitle
        );
      } else
        customTitle = prompt(
          'What would you like to name your game? \n (12 characters max)',
          customTitle
        );
    } while (customTitle?.length === 0 || customTitle?.length > 12);

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
