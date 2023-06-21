import CartContent from "../../../components/client/CartContent";
import CartTotal from "../../../components/server/CartTotal";
import styles from "./page.module.css";
export default function CartPage() {
  return (
    <main className={styles.container}>
      <h1>Cart</h1>
      <CartContent></CartContent>
      <div className={styles.rightGrid}>
        <CartTotal></CartTotal>
      </div>
    </main>
  );
}
