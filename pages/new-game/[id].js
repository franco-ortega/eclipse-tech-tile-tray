import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';
import SelectTiles from '../../components/selectTiles/SelectTiles';

export default function NewGame({ data }) {
  return (
    <div>
      <SelectTiles active={false} data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db('eclipseDB');

    const raw = await db
      .collection('trays')
      .findOne({ _id: ObjectId(context.params.id) });

    const data = await JSON.parse(JSON.stringify(raw));

    console.log('NEW GAME data: ', data);

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
