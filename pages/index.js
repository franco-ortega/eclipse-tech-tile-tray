import clientPromise from '../lib/mongodb';
import Home from '../components/home/Home';

export default function HomePage({ data }) {
  return <Home data={data} />;
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db('eclipseDB');

    // db.collection('trays').deleteMany({});

    const response = await db.collection('trays').find({}).toArray();

    const data = JSON.parse(JSON.stringify(response));

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
