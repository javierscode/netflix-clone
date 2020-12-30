
export const getRandomElementFromArray= (array)=>{
    return array[Math.floor(Math.random()*array.length)];
}

export const getOriginalImage=(path)=>{
    return `https://image.tmdb.org/t/p/original${path}`;
}