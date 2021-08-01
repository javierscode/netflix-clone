import React from "react";
import Loading from "../components/atoms/Loading";
import Hero from "../components/molecules/Hero";
import CardList from '../components/molecules/CardList'
import { useContent } from "../context/ContentContext";


export default function Home() {

    const { contentLoaded, highlighted, mostPopular, topRated, netflixOriginals, genres } = useContent(4);

    return (
        <>
            {contentLoaded ? (
              <>
                  <Hero
                      title={highlighted.title}
                      description={highlighted.description}
                      backgroundImage={highlighted.images.horizontal?.xl}
                      youtubeID={highlighted.youtubeID}
                  />
                  <CardList title="Most Popular" list={mostPopular}/>
                  <CardList title="Top Rated" list={topRated}/>
                  <CardList title="Netflix Originals" list={netflixOriginals} vertical={true}/>
                  {genres.map((genre, index)=>{
                      const {list,name} = genre
                      return (
                        <CardList key={index} title={name} list={list}/>
                      )
                  })}
                  <div style={{ margin: "200px" }} />
              </>
          ): (
                <Loading />
            ) }
        </>
    );
}
