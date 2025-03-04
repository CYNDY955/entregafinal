import React from "react";
import "./OrderCard.css";

function OrderCard({ name, price, img, date }) {
  return (
    <div className="orderCard__container">
      <div className="orderCard__left">
        <div
          className="orderCard__productImg"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
      <div className="orderCard__right">
        <div>
          <h1>{name.length < 30 ? name : `${name.slice(0, 30)} ...`}</h1>
          <h2>Seller: CDE SAS </h2>
        </div>
        <div>
          <h1 className="mobile-price">{price}</h1>
        </div>
        <div>
          <h1 style={{ display: "flex" }}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="trucksvg"
            >
              <path d="M3 18h-2c-.552 0-1-.448-1-1v-2h15v-9h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.121-.728 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-6c0 1.656-1.344 3-3 3s-3-1.344-3-3zm3-1.2c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm12 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-4-2.8h-14v-10c0-.552.448-1 1-1h12c.552 0 1 .448 1 1v10zm3-6v3h4.715l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.42z" />
            </svg>
            Delivery by {date}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
