import styles from "./page.module.css";
import Product from "../../../components/server/Product";
import { products } from "../../../products";
export default function ShopPage() {
  return (
    <main className={styles.container}>
      <h1>Shop</h1>
      <div className={styles.productGrid}>
        {products.map((p) => (
          <Product
            key={p.productID}
            id={p.productID}
            price={p.productPrice}
            isDiscounted={p.discountRate > 0}
          >
            {p.productName}
          </Product>
        ))}
      </div>
    </main>
  );
}
