import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { store } from "../store";

const cartContainer = () => {
  const {cartItems, total, amount} = useSelector((store) => store.cart)

  if (amount < 1) {
    return <section className="cart">
      <header>
        <h2>you are back  </h2>
        <h4 className="empty-cart"></h4>
      </header>
    </section>
  }
  return <div>cart continw</div>;
};

export default cartContainer;
