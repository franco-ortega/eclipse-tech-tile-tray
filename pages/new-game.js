import Select from '../components/select/Select';
import StartGameButton from '../components/buttons/StartGameButton';

export default function NewGame({ isConnected }) {
  const newGamePageStyles = {
    width: 'fit-content',
    marginInline: 'auto',
    paddingTop: '1rem',
    paddingBottom: '2rem'
  };

  return (
    <div>
      <Select active={false} />
      <div style={newGamePageStyles}>
        <StartGameButton />
      </div>
    </div>
  );
}
