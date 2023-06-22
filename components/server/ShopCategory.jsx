import styles from "./ShopCategory.module.css";
import Link from "next/link";
import LinkPrimary from "./LinkPrimary";
import Image from "next/image";

export default function ShopCategory({ children, categoryBackground, href }) {
  return (
    <div className={styles.container}>
      <Image
        src={categoryBackground}
        className={styles.background}
        fill={true}
        alt="Category background"
      ></Image>

      <div className={styles.dim}></div>
      <h2 className={styles.header}>{children}</h2>
      <LinkPrimary href={href}> Shop Now!</LinkPrimary>
      <Link href={href} className={styles.button}></Link>
    </div>
  );
}
