import CartTotalText from "../client/CartTotalText";
import PrimaryButton from "../client/PrimaryButton";
import styles from "./CartTotal.module.css";
export default function CartTotal() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Cart Total</h2>
      <div className={styles.totalContainer}>
        <h3>Cart Total</h3>
        <CartTotalText></CartTotalText>
      </div>
      <PrimaryButton>Proceed to Checkout &rarr;</PrimaryButton>
    </div>
  );
}
