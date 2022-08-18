export const updatePosition = (position, tiles) => {
  if (!position) {
    const totalPositions = tiles.reduce((accumulated, current) => {
      if (current.position) accumulated += 1;
      return accumulated;
    }, 0);

    return totalPositions + 1;
  }

  return position;
};
