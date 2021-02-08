import React, { useEffect, useState } from "react";
import { useAPI } from "../api";
import SectionList from "./SectionList";

const SectionGenerator = ({ genres, type, max = genres.lenght }) => {
  const { getMoviesByGenre, getTVShowsByGenre } = useAPI();

  const [ready, setReady] = useState(false);
  const [sections, setSections] = useState([]);

  const getContentByGenre =(type, id)=> type == "movies" ? getMoviesByGenre(id) : getTVShowsByGenre(id)
  

  useEffect(async () => {

    const sectionArray = await Promise.all(genres.map(async (genre, key) => {
      if (key < max) {
        const { results } = await getContentByGenre(type, genre.id);
        const section = {
          name: genres[key].name,
          results: results
        }
        return section
      }
    }));
    setSections(sectionArray.filter(Boolean))
    setReady(true)

  }, []);

  return ready ? (
    <>
      {sections.map((section, key) => <SectionList key={key} title={section.name} list={section.results} />)}
    </>
  ) : null
};

export default SectionGenerator;
