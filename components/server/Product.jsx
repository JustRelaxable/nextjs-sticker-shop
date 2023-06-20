import Link from "next/link";
import LinkPrimary from "./LinkPrimary";
import styles from "./Product.module.css";
export default function Product() {
  return (
    <div className={styles.container}>
      <Link href="" className={styles.productLink}>
        <img
          className={styles.productImage}
          src="./product-thumbnail.webp"
        ></img>
        <h3 className={styles.productName}>Dandelion Fluff Pattern Set</h3>
      </Link>
      <p className={styles.productPrice}>3.00$</p>
      <LinkPrimary href="">Add to Card</LinkPrimary>
    </div>
  );
}
