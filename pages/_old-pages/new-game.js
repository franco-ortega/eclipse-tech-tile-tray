import SelectTiles from '../../components/selectTiles/SelectTiles';
import StartGameButton from '../../components/buttons/StartGameButton';

export default function NewGame() {
  return (
    <div>
      <SelectTiles active={false} />
      <StartGameButton />
    </div>
  );
}
