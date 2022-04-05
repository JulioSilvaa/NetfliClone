import React, { useState } from "react";
import "./style.css";

export default function MovieRow({ title, items }) {
  const [scrollList, setScrollList] = useState(-400);

  const handleleftArrow = () => {
    let x = scrollList + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollList(x);
  };

  const handlerightArrow = () => {
    let x = scrollList - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 200;
    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60;
    }
    setScrollList(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div
        onClick={handleleftArrow}
        className="movieRow--left"
        style={{ fontSize: 50 }}
      >
        ⬅
      </div>
      <div
        onClick={handlerightArrow}
        className="movieRow--right"
        style={{ fontSize: 50 }}
      >
        ➡️
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollList,
            width: items.results.length * 200,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, id) => {
              return (
                <div key={id} className="movieRow--item">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_title}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
