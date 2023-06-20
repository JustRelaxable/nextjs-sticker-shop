import styles from "./ProductHeader.module.css";

export default function ProductHeader({ children }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.text}>{children}</h2>
    </div>
  );
}
