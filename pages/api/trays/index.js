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
      const response = await db.collection('trays').insertOne(req.body);
      res.json(response);
      break;

    default:
      console.log('Method not available');
      return;
  }
}
