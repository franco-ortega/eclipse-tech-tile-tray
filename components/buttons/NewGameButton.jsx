import { useRouter } from 'next/router';
import { postData } from '../../services/request';
import trayData from '../../data/tray.json';
import Button from './Button';
import ButtonContainer from './ButtonContainer';

const NewGameButton = ({ length }) => {
  const router = useRouter();

  const onNewGameClick = async () => {
    const response = await postData('/api/trays', {
      ...trayData,
      name: `Game #${length + 1}`,
      date: new Date()
    });

    router.push(`/new-game/${response.insertedId}`);
  };

  const text = 'New Game';

  return (
    <ButtonContainer>
      <Button onButtonClick={onNewGameClick} text={text} />
    </ButtonContainer>
  );
};

export default NewGameButton;
