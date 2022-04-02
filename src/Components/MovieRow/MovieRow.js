import React from "react";
import "./style.css";

export default function MovieRow({ title, items }) {

    console.log(items);
  return (
    <div>
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        {items.results.length > 0 &&
          items.results.map((item, id) => {
           return  <img key={id}
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={item.original_title}
            />;
          })}
      </div>
    </div>
  );
}
