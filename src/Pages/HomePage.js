import React, { useEffect, useState } from "react";
import Utils from "../Utils/listMovieAPI";
import MovieRow from "../Components/MovieRow/MovieRow";
import FeaturedMovie from "../Components/FeaturedMovie/FeaturedMovie";
import Header from "../Components/Header/Header";

export default function HomePage() {
  const [moveiList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Utils.getHomeList();
      setMovieList(list);

      let originals = list.filter((x) => x.slug === "originals");
      let randomMovie = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomMovie];
      let choseInfo = await Utils.getMoviedetails(chosen.id, "tv");

      setFeaturedData(choseInfo);
    };
    loadAll();
  }, []);
  return (
    <div className="page">
      <Header/>
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {moveiList.map((movie, id) => {
          return <MovieRow title={movie.title} items={movie.items} key={id} />;
        })}
      </section>
    </div>
  );
}
