import styles from "./PagePadding.module.css";
export default function PagePadding({ children }) {
  return <div className={styles.container}>{children}</div>;
}
