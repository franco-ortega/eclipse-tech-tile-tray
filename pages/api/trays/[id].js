import { ObjectId } from 'mongodb';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;

  const db = client.db('eclipseDB');

  switch (req.method) {
    case 'GET':
      const query = { _id: ObjectId(req.query.id) };
      const raw = await db.collection('trays').findOne(query);
      const data = await JSON.parse(JSON.stringify(raw));
      res.json(data);
      break;

    case 'PUT':
      const update = await db.collection('trays').findOneAndUpdate(
        { _id: ObjectId(req.query.id) },
        { $set: req.body.update },
        {
          returnDocument: 'after',
          arrayFilters: [{ element: req.body.tile }]
        }
      );
      res.json(update.value);
      break;

    default:
      console.log('Method not available');
      return;
  }
}
