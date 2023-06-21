import styles from "./PageSizer.module.css";
export default function PageSizer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
