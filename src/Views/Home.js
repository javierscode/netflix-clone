import React from "react";
import Loading from "../components/atoms/Loading";
import Hero from "../components/molecules/Hero";
import CardList from '../components/molecules/CardList'
import { useContent } from "../context/ContentContext";


export default function Home() {

    const { contentLoaded, highlighted, mostPopular, topRated, netflixOriginals } = useContent();

    return (
        <>
            {contentLoaded ? (
              <>
                  <Hero
                      title={highlighted.title}
                      description={highlighted.description}
                      backgroundImage={highlighted.images.horizontal}
                      youtubeID={highlighted.youtubeID}
                  />
                  <CardList title="Most Popular" list={mostPopular}/>
                  <CardList title="Top Rated" list={topRated}/>
                  <CardList title="Netflix Originals" list={netflixOriginals} vertical={true}/>

                  <div style={{ margin: "200px" }} />
              </>
          ): (
                <Loading />
            ) }
        </>
    );
}
