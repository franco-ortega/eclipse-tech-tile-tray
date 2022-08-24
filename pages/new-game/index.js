import clientPromise from '../../lib/mongodb';
import Fallback from '../../components/fallback/Fallback';

export default function NewGameFallBack({ data }) {
  return <Fallback data={data} />;
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db('eclipseDB');

    const response = await db.collection('trays').find({}).toArray();

    const data = JSON.parse(JSON.stringify(response));
    console.log(data);

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
