import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';
import SelectTiles from '../../components/selectTiles/SelectTiles';

export default function NewGame({ data }) {
  return <SelectTiles active={false} data={data} />;
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db('eclipseDB');

    const response = await db
      .collection('trays')
      .findOne({ _id: ObjectId(context.params.id) });

    const data = await JSON.parse(JSON.stringify(response));

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
