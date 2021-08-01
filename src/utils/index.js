export const getRandomElementFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const getOriginalImage = (path) => {
  return `https://image.tmdb.org/t/p/original${path}`;
};

export const getImageByWidth = (path, width) => {
  return `https://image.tmdb.org/t/p/w${width + path}`;
};
export const getMergedArray = (firstArray, secondArray) => {
  const mergedArray = [];
  const maxLength =
    firstArray.length >= secondArray.length
      ? firstArray.length
      : secondArray.length;

  for (let i = 0; i < maxLength; i++) {
    firstArray[i] ? mergedArray.push(firstArray[i]) : null;
    secondArray[i] ? mergedArray.push(secondArray[i]) : null;
  }

  return mergedArray;
};

const sizes = {
  sm: 400,
  md: 500,
  lg: 600,
  xl: "original",
};

const handleImageBySize = (image) => {
  let ImageBySize = {};
  Object.keys(sizes).map((key) => {
    const value =
      sizes[key] === "original"
        ? getOriginalImage(image)
        : getImageByWidth(image, sizes[key]);
    ImageBySize = { ...ImageBySize, [key]: value };
  });
  return ImageBySize;
};

export const getStandardItemsArray = (array) =>
  array.map((item) => {
    const type = item.original_title ? "movie" : "tvshow";
    const title = item.original_title
      ? item.original_title
      : item.original_name;

    const verticalImages =
      item.poster_path && handleImageBySize(item.poster_path);
    const horizontalImages =
      item.backdrop_path && handleImageBySize(item.backdrop_path);

    return {
      type,
      id: item.id,
      title,
      description: item.overview,
      images: {
        vertical: verticalImages,
        horizontal: horizontalImages,
      },
    };
  });
