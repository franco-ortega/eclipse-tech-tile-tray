import clientPromise from '../../lib/mongodb';
import SelectTiles from '../../components/selectTiles/SelectTiles';
import { ObjectId } from 'mongodb';

export default function TestRound({ data }) {
  console.log('TEST ROUND ID PAGE: ', data._id);
  return (
    <div>
      <SelectTiles active={false} data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    const client = await clientPromise;
    const db = client.db('eclipseDB');
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

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
