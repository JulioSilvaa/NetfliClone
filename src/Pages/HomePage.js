import React, { useEffect, useState } from "react";
import Utils from "../Utils/listMovieAPI";

export default function HomePage() {
  const [moveiList, setMovieList] = useState();

  useEffect(() => {
    const loadAll = async () => {
      let list = await Utils.getHomeList();

      setMovieList(list);
    };
    loadAll();
  }, []);
  return <div>HomePage</div>;
}
