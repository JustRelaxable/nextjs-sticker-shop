"use client";
import Link from "next/link";
import styles from "./MobileMenu.module.css";
import { useMobileMenuToggleContext } from "../../contexts/MobileMenuToggleContext";
export default function MobileMenu() {
  const [mobileMenuActive, setMobileMenuActive] = useMobileMenuToggleContext();
  function closeMobileMenu() {
    setMobileMenuActive(false);
  }
  return (
    <div
      className={`${styles.outerContainer} ${
        mobileMenuActive && styles.outerContainerVisible
      }`}
    >
      <div
        className={`${styles.container} ${mobileMenuActive && styles.visible}`}
      >
        <button className={styles.closeButton} onClick={closeMobileMenu}>
          X
        </button>
        <Link href="/shop" onClick={closeMobileMenu} className={styles.link}>
          Shop
        </Link>
        <Link href="/cart" onClick={closeMobileMenu} className={styles.link}>
          Cart
        </Link>
      </div>
    </div>
  );
}
