import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// function CardItem(props) {
function CardItem({ cardList }) {
  return (
    <>
      {cardList.slice(0, 3).map((list) => {
        return (
          <CardItemStyled>
            <Link className="cards__item__link" to={list.path}>
              <figure className="cards__item__pic-wrap" data-category={list.label}>
                <img className="cards__item__img" alt="Travel" src={list.src} />
              </figure>
              <div className="cards__item__info">
                <h5 className="cards__item__text">{list.text}</h5>
              </div>
            </Link>
          </CardItemStyled>
          // <li key={list.id} className="cards__item">

          // </li>
        );
      })}
    </>
  );
}

const CardItemStyled = styled.li`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;
`;

export default CardItem;

// {
//   /* <li key={props.id} className="cards__item">
//   <Link className="cards__item__link" to={props.path}>
//     <figure className="cards__item__pic-wrap" data-category={props.label}>
//       <img className="cards__item__img" alt="Travel" src={props.src} />
//     </figure>
//     <div className="cards__item__info">
//       <h5 className="cards__item__text">{props.text}</h5>
//     </div>
//   </Link>
// </li>; */
// }
