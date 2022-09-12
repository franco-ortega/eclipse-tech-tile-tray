const removeExtraSpaces = (title) => {
  const cleanTitle = title
    .split(' ')
    .filter((word) => word.replace(' ', '').length)
    .join(' ');

  return cleanTitle;
};

const titlePrompt = (text, title) => prompt(text, title);

export const customizeTitle = (originalTitle) => {
  let finalTitle = originalTitle;

  do {
    if (finalTitle.length > 12) {
      const text = 'Please limit your title to a maximum of 12 characters.';
      finalTitle = titlePrompt(text, originalTitle);
    } else if (finalTitle.length === 0) {
      const text = 'Please enter a title (12 characters max).';
      finalTitle = titlePrompt(text, originalTitle);
    } else {
      const text = 'What would you like to name your game? (12 characters max)';
      finalTitle = titlePrompt(text, originalTitle);
    }

    if (finalTitle?.length) finalTitle = removeExtraSpaces(finalTitle);
  } while (finalTitle?.length === 0 || finalTitle?.length > 12);

  return finalTitle;
};
