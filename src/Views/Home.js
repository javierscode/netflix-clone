import React from "react";
import Loading from "../components/atoms/Loading";
import Hero from "../components/molecules/Hero";
import CardList from '../components/molecules/CardList'
import { useContent } from "../context/ContentContext";


export default function Home() {
    const { loading, highlighted, mostPopular } = useContent();
    // const [loadPage, setLoadPage] = useState(false);

    // const [highlight, setHighlight] = useState({});

    // const {movies, setMovies} = useMovies();
    // const {shows, setShows} = useShows();

    // const {getMostPopularMovies, getMostPopularTVShows, getTopRatedMovies, getTopRatedTVShows, getNetflixOriginalsMovies, getNetflixOriginalsTVShows , getListOfMoviesGenre, getListOfTVShowsGenre} = useAPI()

    // useEffect(async() => {

    //     setLoadPage(false);

    //     const {results : mostPopularMovies} = await getMostPopularMovies()
    //     const {results : topRatedMovies} = await getTopRatedMovies()
    //     const {results : netflixOriginalsMovies} = await getNetflixOriginalsMovies()
    //     const {genres : MoviesGenres} = await getListOfMoviesGenre()

    //     setMovies({...movies, mostPopular: mostPopularMovies, topRated: topRatedMovies, netflixOriginals : netflixOriginalsMovies, MoviesGenres})

    //     const {results : mostPopularTVShows} = await getMostPopularTVShows()
    //     const {results : topRatedTVShows} = await getTopRatedTVShows()
    //     const {results : netflixOriginalsTVShows} = await getNetflixOriginalsTVShows()
    //     const {genres : TVShowsGenres} = await getListOfTVShowsGenre()

    //     setShows({...shows, mostPopular: mostPopularTVShows, topRated: topRatedTVShows, netflixOriginals:netflixOriginalsTVShows,TVShowsGenres})

    // }, []);

    // useEffect(() => {
    //   if(Object.keys(movies).length >2 && Object.keys(shows).length >2){
    //     setRandomHighligh();
    //     setTimeout(() => setLoadPage(true), 500);
    //   }
    // }, [movies,shows])

    // const setRandomHighligh = () =>{
    //     const decision = getRandomElementFromArray(["movies", "shows"]);
    //     const selected= decision == "movies"
    //       ? getRandomElementFromArray(movies.mostPopular)
    //       : getRandomElementFromArray(shows.mostPopular);
    //     selected.type= decision;
    //     setHighlight(selected)
    //   }
    console.log(highlighted);
    console.log(loading);

    return (
        <>
            {loading ? (
                <Loading />
            ): (
              <>
                  <Hero
                      title={highlighted.title}
                      description={highlighted.description}
                      backgroundImage={highlighted.images.horizontal}
                  />
                  <CardList title="Most Popular" list={mostPopular}/>

                  <div style={{ margin: "200px" }} />
              </>
          ) }
        </>
    );
}
