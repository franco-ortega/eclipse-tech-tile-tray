import { availableSortedTiles } from './filterAndSort';

export const updatePosition = (tiles) => {
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
};
