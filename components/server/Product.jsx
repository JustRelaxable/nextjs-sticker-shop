"use client";
import Link from "next/link";
import LinkPrimary from "./LinkPrimary";
import styles from "./Product.module.css";
import PrimaryButton from "../client/PrimaryButton";
import { useCartContext } from "../client/CartContext";
import { products, getProduct } from "../../products";
export default function Product({ children, price, isDiscounted, id }) {
  const [cartContent, setCartContent, addToCart] = useCartContext();
  const selectedProduct = getProduct(id);
  return (
    <div className={styles.container}>
      {isDiscounted && <div className={styles.saleBadge}>SALE</div>}
      <Link href={`/products/${id}`} className={styles.productLink}>
        <img
          className={styles.productImage}
          src={selectedProduct.productThumbnailPath}
        ></img>
        <h3 className={styles.productName}>{children}</h3>
      </Link>
      <p className={styles.productPrice}>{price}$</p>
      <PrimaryButton
        onClick={() => {
          addToCart(id, 1);
        }}
      >
        Add to Card
      </PrimaryButton>
    </div>
  );
}
