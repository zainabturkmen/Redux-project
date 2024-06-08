import React from "react";
import { ChevronDown, ChevronUp } from "../icons";

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <h4 className="item-price"></h4>
    </article>
  );
};

export default CartItem;
