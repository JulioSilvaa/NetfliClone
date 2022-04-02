import React, { useEffect, useState } from "react";
import Utils from "../Utils/listMovieAPI";
import MovieRow from "../Components/MovieRow/MovieRow";

export default function HomePage() {
  const [moveiList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Utils.getHomeList();

      setMovieList(list);
    };
    loadAll();
  }, []);
  return (
    <div className="page">
      <section className="lists">
        {moveiList.map((movie, id) => {
          return <MovieRow title={movie.title} items={movie.items} key={id} />;
        })}
      </section>
    </div>
  );
}
