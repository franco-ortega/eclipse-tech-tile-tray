import Play from '../components/play/Play';
import NextRoundButton from '../components/buttons/NextRoundButton';

export default function PlayGame() {
  return (
    <div>
      <Play active={true} />
      <NextRoundButton />
    </div>
  );
}
