import Link from "next/link";
import LinkPrimary from "./LinkPrimary";
import styles from "./Product.module.css";
export default function Product({ children, price, isDiscounted }) {
  return (
    <div className={styles.container}>
      {isDiscounted && <div className={styles.saleBadge}>SALE</div>}
      <Link href="" className={styles.productLink}>
        <img
          className={styles.productImage}
          src="./product-thumbnail.webp"
        ></img>
        <h3 className={styles.productName}>{children}</h3>
      </Link>
      <p className={styles.productPrice}>{price}$</p>
      <LinkPrimary href="">Add to Card</LinkPrimary>
    </div>
  );
}
