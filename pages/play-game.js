import AddTilesButton from '../components/buttons/AddTilesButton';
import Play from '../components/play/Play';

export default function PlayGame() {
  return (
    <div>
      <Play active={true} />
      <AddTilesButton />
    </div>
  );
}
