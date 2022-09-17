import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;

  const db = client.db('eclipseDB');

  switch (req.method) {
    case 'GET':
      const raw = await db.collection('trays').find({}).toArray();
      const data = await JSON.parse(JSON.stringify(raw));
      res.json(data);
      break;

    case 'POST':
      const newTray = await db.collection('trays').insertOne(req.body);
      res.json(newTray);
      break;

    case 'DELETE':
      if (req.body.delete === 'G00dBye~') {
        const deleted = await db.collection('trays').deleteMany({});
        res.json({
          success: deleted.acknowledged,
          message: deleted.deletedCount
            ? `All ${deleted.deletedCount} trays have been deleted`
            : 'No trays to delete.'
        });
      } else {
        res.json({
          success: false,
          message: 'Password incorrect.'
        });
      }
      break;

    default:
      console.log('Method not available');
      return;
  }
}
