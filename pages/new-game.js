import Select from '../components/select/Select';
import StartGameButton from '../components/buttons/StartGameButton';

export default function NewGame({ isConnected }) {
  return (
    <div>
      <Select active={false} />
      <StartGameButton />
    </div>
  );
}
