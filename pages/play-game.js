import Play from '../components/play/Play';
import NewRoundButton from '../components/buttons/NewRoundButton';

export default function PlayGame() {
  return (
    <div>
      <Play active={true} />
      <NewRoundButton />
    </div>
  );
}
