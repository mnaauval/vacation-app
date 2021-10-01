import React from "react";
import { Link } from "react-router-dom";

function CardItem({ cardList2 }) {
  return (
    <>
      <li className="cards__item">
        {cardList2.slice(2, 5).map((list) => {
          return (
            <Link className="cards__item__link" to={list.path}>
              <figure className="cards__item__pic-wrap" data-category={list.label}>
                <img className="cards__item__img" alt="Travel" src={list.src} />
              </figure>
              <div className="cards__item__info">
                <h5 className="cards__item__text">{list.text}</h5>
              </div>
            </Link>
          );
        })}
      </li>
    </>
  );
}

export default CardItem;
