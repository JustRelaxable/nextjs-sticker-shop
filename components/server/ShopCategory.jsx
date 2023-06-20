import styles from "./ShopCategory.module.css";
import Link from "next/link";
import LinkPrimary from "./LinkPrimary";

export default function ShopCategory({ children, categoryBackground, href }) {
  return (
    <div className={styles.container}>
      <img src={categoryBackground} className={styles.background} />
      <div className={styles.dim}></div>
      <h2 className={styles.header}>{children}</h2>
      <LinkPrimary href={href}> Shop Now!</LinkPrimary>
      <Link href={href} className={styles.button}></Link>
    </div>
  );
}
