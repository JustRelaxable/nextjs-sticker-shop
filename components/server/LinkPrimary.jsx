import styles from "./LinkPrimary.module.css";
import Link from "next/link";
export default function LinkPrimary({ href, children }) {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
}
