import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import {
  addItemToWishlist,
  itemPresentInWishlist,
  removeItemFromWishlist,
} from "../../pages/cart/useLocalStorage";

function ProductCard(props) {
  const [isInWishlist, setIsInWishlist] = useState(
    itemPresentInWishlist(props.id)
  );

  return (
    <div className="productCard__container slider-card">
      <div
        className="productCard__addToBasket"
        onClick={(e) => e.stopPropagation()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 20 16"
          onClick={(e) => {
            e.stopPropagation();
            setIsInWishlist(!isInWishlist);
            if (isInWishlist) {
              removeItemFromWishlist(props.id);
            } else {
              addItemToWishlist({
                id: props.id,
                name: props.name,
                rating: props.rating,
                price: props.price,
                img: props.url,
              });
            }
          }}
        >
          <path
            d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
            fill={`${isInWishlist ? "red" : "white"}`}
            className="eX72wL"
            stroke="red"
            
            opacity=".9"
          ></path>
        </svg>
      </div>
      <Link to={`/products/${props.id}`}>
        <div
          style={{
            backgroundImage: `url('${props.url}')`,
          }}
          className="productCard__productImage"
        ></div>
        {}
        <div className="productCard__infoContainer">
          <div className="productCard__infoContainerMiddle">
            <h2 className="productCard__title">
              {props.name.length < 30
                ? props.name
                : `${props.name.slice(0, 30)} ...`}
            </h2>
          </div>
          <div className="productCard__infoContainerTop">
            <h2 className="productCard__priceTag">
              <strong>{props.price}</strong>
            </h2>
            <h2 className="productCard__rating ">
              <strong>{props.rating}</strong>
              <img
                className="star"
                src="⭐"
                alt=""
              />
            </h2>
          </div>
          {}
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
