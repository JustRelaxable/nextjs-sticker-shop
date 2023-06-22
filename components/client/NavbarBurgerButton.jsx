"use client";
import { useMobileMenuToggleContext } from "../../contexts/MobileMenuToggleContext";
import styles from "./NavbarBurgerButton.module.css";
export default function NavbarBurgerButton() {
  const [, setMobileMenuActive] = useMobileMenuToggleContext();
  return (
    <button
      onClick={() => {
        setMobileMenuActive(true);
      }}
      className={styles.button}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
        className={styles.menuIcon}
      >
        <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
      </svg>
      <p className={styles.searchText}>Menu</p>
    </button>
  );
}
