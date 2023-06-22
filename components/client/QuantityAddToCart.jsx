"use client";
import styles from "./QuantityAddToCart.module.css";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";

export default function QuantityAddToCart({ productID }) {
  const [quantity, setQuantity] = useState(1);
  const [cartContext, setCartContext, addToCart] = useCartContext();

  return (
    <div className={styles.quantityContainer}>
      <input
        type="number"
        defaultValue={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      ></input>
      <PrimaryButton
        onClick={() => {
          addToCart(productID, parseInt(quantity));
        }}
      >
        Add to Cart
      </PrimaryButton>
    </div>
  );
}
