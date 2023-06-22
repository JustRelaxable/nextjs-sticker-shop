"use client";
import { useMobileMenuToggleContext } from "../../contexts/MobileMenuToggleContext";
export default function MobileMenuCloseButton() {
  const [, setMobileMenuActive] = useMobileMenuToggleContext();
  return (
    <button
      className={styles.closeButton}
      onClick={() => {
        setMobileMenuActive(false);
      }}
    >
      X
    </button>
  );
}
