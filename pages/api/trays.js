import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;

  const db = client.db('eclipseDB');

  switch (req.method) {
    case 'GET':
      if (req.query.id) {
        // get one tray if the query has an id
        const query = { _id: ObjectId(req.query.id) };
        const raw = await db.collection('trays').findOne(query);
        const data = await JSON.parse(JSON.stringify(raw));
        res.json(data);
      } else if (!req.body) {
        // get all trays if the body is empty
        const raw = await db.collection('trays').find({}).toArray();
        const data = await JSON.parse(JSON.stringify(raw));
        res.json(data);
      }
      break;
    case 'POST':
      const response = await db.collection('trays').insertOne(req.body);
      res.json(response);
      break;
    case 'PUT':
      const update = await db
        .collection('trays')
        .updateOne({ _id: ObjectId(req.query.id) }, { $set: req.body });

      console.log(update);
      res.json(update);
      break;
    default:
      console.log('Method not available');
      return;
  }
}
