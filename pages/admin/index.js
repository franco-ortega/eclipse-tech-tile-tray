import Admin from '../../components/admin/Admin';
import clientPromise from '../../lib/mongodb';

export default function AdminPage({ data }) {
  return <Admin data={data} />;
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db('eclipseDB');

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
