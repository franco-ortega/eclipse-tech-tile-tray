import { availableSortedTiles } from './filterAndSort';

export const updatePosition = (position, tiles) => {
  if (!position) {
    // const totalPositions = tiles.reduce((accumulated, current) => {
    //   if (current.position) accumulated += 1;
    //   return accumulated;
    // }, 0);
    // return totalPositions + 1;

    // sort and filter tiles ?
    // look at position of each tile
    // - if there is a gap (1, 2, 4), the next position is that gap (3)
    // - else the next position is the next opening at the end (5)

    let firstOpenPosition = 1;

    const currentTiles = availableSortedTiles(tiles);
    console.log(currentTiles);

    const foundTile = currentTiles.find((tile, i) => {
      console.log('POSITION / INDEX', tile.position, i);
      console.log('TILE', tile);

      if (tile.position > 1 && i === 0) {
        firstOpenPosition = 1;
        return tile;
      }

      if (tile.position + 1 !== currentTiles[i + 1]?.position) {
        firstOpenPosition = tile.position === null ? 1 : tile.position + 1;
        return tile;
      }
    });

    console.log('1st Open: ', firstOpenPosition);
    console.log('FOUND: ', foundTile);

    return firstOpenPosition;
  }

  return position;
};
