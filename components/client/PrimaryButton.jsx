"use client";
import styles from "./PrimaryButton.module.css";
export default function PrimaryButton({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
