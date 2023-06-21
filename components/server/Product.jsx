"use client";
import Link from "next/link";
import LinkPrimary from "./LinkPrimary";
import styles from "./Product.module.css";
import PrimaryButton from "../client/PrimaryButton";
import { useCartContext } from "../client/CartContext";
export default function Product({ children, price, isDiscounted, id }) {
  const [cartContent, setCartContent] = useCartContext();

  function addToCart() {
    setCartContent((c) => {
      return [...c, { productID: id, quantity: 1 }];
    });
  }

  return (
    <div className={styles.container}>
      {isDiscounted && <div className={styles.saleBadge}>SALE</div>}
      <Link href={`/products/${id}`} className={styles.productLink}>
        <img
          className={styles.productImage}
          src="./product-thumbnail.webp"
        ></img>
        <h3 className={styles.productName}>{children}</h3>
      </Link>
      <p className={styles.productPrice}>{price}$</p>
      <PrimaryButton onClick={addToCart}>Add to Card</PrimaryButton>
    </div>
  );
}
