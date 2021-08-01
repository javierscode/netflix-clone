export const getRandomElementFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

export const getOriginalImage = (path) => {
    return `https://image.tmdb.org/t/p/original${path}`;
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

export const getStandardItemsArray = (array) => {
    return array.map((item) => ({
        type: item.original_title ? "movie" : "tvshow",
        id: item.id,
        title: item.original_title ? item.original_title : item.original_name,
        description: item.overview,
        images: {
            vertical: item.poster_path ? getOriginalImage(item.poster_path): null,
            horizontal: item.backdrop_path ? getOriginalImage(item.backdrop_path): null,
        },
    }));
};
