import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';
import SelectTiles from '../../components/selectTiles/SelectTiles';
// import StartGameButton from '../../components/buttons/StartGameButton';

export default function NewGame({ data }) {
  console.log('NEW GAME page data: ', data);
  return (
    <div>
      <SelectTiles active={false} data={data} />
      {/* <StartGameButton id={data._id} /> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(' NEW GAME ID PAGE: ', context.params.id);
  try {
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
