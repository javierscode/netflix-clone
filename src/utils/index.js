
export const getRandomElementFromArray= (array)=>{
    return array[Math.floor(Math.random()*array.length)];
}

export const getOriginalImage=(path)=>{
    return `https://image.tmdb.org/t/p/original${path}`;
}

export const getMergedArray= (firstArray, secondArray) =>{

    const  mergedArray = [];
    const maxLength = firstArray.length>= secondArray.length ? firstArray.length : secondArray.length;

    for (let i = 0; i < maxLength; i++) {
        firstArray[i] ? mergedArray.push(firstArray[i]): null;
        secondArray[i] ? mergedArray.push(secondArray[i]): null;
    }

    return mergedArray

}