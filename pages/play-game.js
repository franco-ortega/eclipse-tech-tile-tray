import Play from '../components/play/Play';
import NextRoundButton from '../components/buttons/NextRoundButton';
import EndGameButton from '../components/buttons/EndGameButton';

export default function PlayGame() {
  return (
    <div>
      <Play active={true} />
      {/* <div
        style={{
          display: 'flex',
          gap: '2rem',
          width: 'fit-content',
          marginInline: 'auto'
        }}
      > */}
      <NextRoundButton />
      <EndGameButton />
      {/* </div> */}
    </div>
  );
}
