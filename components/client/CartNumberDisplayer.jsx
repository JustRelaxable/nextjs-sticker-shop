"use client";
import { useCartContext } from "../../contexts/CartContext";
import styles from "./CartNumberDisplayer.module.css";
export default function CartNumberDisplayer() {
  const [cartContent, setCartContent] = useCartContext();
  const quantity = cartContent.reduce((acc, p) => {
    return acc + p.quantity;
  }, 0);
  return (
    <>{cartContent.length > 0 && <p id={styles.cartNumber}>{quantity}</p>}</>
  );
}
