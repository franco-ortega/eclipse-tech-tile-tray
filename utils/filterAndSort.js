export const availableTiles = (tiles) =>
  tiles.filter((tile) => tile.position && tile.selected - tile.used);

export const sortedTiles = (tiles) =>
  tiles.sort((a, b) => a.position - b.position);

export const availableSortedTiles = (tiles) =>
  sortedTiles(availableTiles(tiles));
