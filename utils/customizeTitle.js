export const customizeTitle = (originalTitle) => {
  let finalTitle = originalTitle;

  do {
    if (finalTitle.length > 12) {
      finalTitle = originalTitle;
      finalTitle = prompt(
        'Please limit your title to a maximum of 12 characters.',
        finalTitle
      );
    } else if (finalTitle.length === 0) {
      finalTitle = originalTitle;
      finalTitle = prompt(
        'Please enter a title (12 characters max).',
        finalTitle
      );
    } else
      finalTitle = prompt(
        'What would you like to name your game? \n (12 characters max)',
        finalTitle
      );

    if (finalTitle?.length) {
      finalTitle = finalTitle
        .split(' ')
        .filter((word) => word.replace(' ', '').length)
        .join(' ');
    }
  } while (finalTitle?.length === 0 || finalTitle?.length > 12);

  return finalTitle;
};
