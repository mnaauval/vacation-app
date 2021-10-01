import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li key={props.id} className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Travel" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;

// {cardList.slice(0, 3).map((list) => {
//   return (
//     <li key={list.id} className="cards__item">
//       <Link className="cards__item__link" to={list.path}>
//         <figure className="cards__item__pic-wrap" data-category={list.label}>
//           <img className="cards__item__img" alt="Travel" src={list.src} />
//         </figure>
//         <div className="cards__item__info">
//           <h5 className="cards__item__text">{list.text}</h5>
//         </div>
//       </Link>
//     </li>
//   );
// })}
