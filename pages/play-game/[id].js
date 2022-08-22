import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';
import Play from '../../components/play/Play';
import {
  availableTiles,
  availableSortedTiles
} from '../../utils/filterAndSort';

export default function PlayGame({ data }) {
  return (
    <div>
      <Play active={true} data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db('eclipseDB');

    const raw = await db
      .collection('trays')
      .findOne({ _id: ObjectId(context.params.id) });

    const data = await JSON.parse(JSON.stringify(raw));

    data.rows.military.tiles = data.rows.military.tiles.filter(
      (tile) => tile.position && tile.selected - tile.used
    );

    data.rows.grid.tiles = data.rows.grid.tiles.filter(
      (tile) => tile.position && tile.selected - tile.used
    );

    data.rows.nano.tiles = data.rows.nano.tiles.filter(
      (tile) => tile.position && tile.selected - tile.used
    );

    data.rows.military.tiles = availableTiles(data.rows.military.tiles);
    data.rows.grid.tiles = availableTiles(data.rows.grid.tiles);
    data.rows.nano.tiles = availableTiles(data.rows.nano.tiles);
    data.rows.rare.tiles = availableSortedTiles(data.rows.rare.tiles);

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
