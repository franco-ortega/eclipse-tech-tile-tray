import { availableSortedTiles } from './filterAndSort';

export const updatePosition = (tiles) => {
  const currentTiles = availableSortedTiles(tiles);

  if (!currentTiles.length) return 1;

  const firstEmptyPosition = currentTiles.reduce((prev, current, i) => {
    const nextPosition = current.position + 1;
    const positionOfNextTile = currentTiles[i + 1]?.position;

    if (prev) return prev;
    if (current.position > i + 1) return i + 1;
    if (nextPosition !== positionOfNextTile) return nextPosition;

    return prev;
  }, null);

  return firstEmptyPosition;
};
