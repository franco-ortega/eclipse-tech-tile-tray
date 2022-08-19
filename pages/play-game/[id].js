import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';
import Play from '../../components/play/Play';

export default function PlayGame({ data }) {
  return (
    <div>
      <Play active={true} data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(' PLAY GAME ID PAGE');
  try {
    await clientPromise;

    const client = await clientPromise;
    const db = client.db('eclipseDB');

    const raw = await db
      .collection('trays')
      .findOne({ _id: ObjectId(context.params.id) });

    const data = await JSON.parse(JSON.stringify(raw));

    return {
      props: { isConnected: true, data }
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false }
    };
  }
}
