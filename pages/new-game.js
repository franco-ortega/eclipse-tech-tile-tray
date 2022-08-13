import Home from '../components/home/Home';
import Select from '../components/select/Select';
import clientPromise from '../lib/mongodb';

export default function NewGame({ isConnected }) {
  return (
    <div>
      <Select />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // const client = await clientPromise;
    // const db = client.db('eclipseDB');
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    // const raw = await db.collection('trays').find({}).toArray();

    // const data = await JSON.parse(JSON.stringify(raw));

    return {
      props: { isConnected: true }
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false }
    };
  }
}
