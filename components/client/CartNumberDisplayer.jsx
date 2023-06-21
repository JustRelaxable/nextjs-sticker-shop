"use client";
import { useCartContext } from "./CartContext";
import styles from "./CartNumberDisplayer.module.css";
export default function CartNumberDisplayer() {
  const [cartContent, setCartContent] = useCartContext();
  return (
    <>
      {cartContent.length > 0 && (
        <p id={styles.cartNumber}>{cartContent.length}</p>
      )}
    </>
  );
}