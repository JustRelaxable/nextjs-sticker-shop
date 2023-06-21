import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ProductHeader from "../../components/server/ProductHeader";
import ShopCategory from "../../components/server/ShopCategory";
import Product from "../../components/server/Product";
import { products } from "../../products";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1>Homepage</h1>
      <ProductHeader>Check out product by categories!</ProductHeader>
      <div className={styles.categoryContainer}>
        <ShopCategory
          categoryBackground="./flower-pattern.webp"
          href="/patterns"
        >
          Patterns
        </ShopCategory>
        <ShopCategory
          categoryBackground="./food-stickers.webp"
          href="/stickers"
        >
          Stickers
        </ShopCategory>
      </div>
      <ProductHeader>Check our latest added items!</ProductHeader>
      <div className={styles.productContainer}>
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
      <ProductHeader>Check out time limited discounted items!</ProductHeader>
      <div className={styles.productContainer}>
        {products
          .filter((p) => p.discountRate > 0)
          .map((p) => (
            <Product
              key={p.productID}
              id={p.productID}
              price={p.productPrice}
              isDiscounted={true}
            >
              {p.productName}
            </Product>
          ))}
      </div>
      <div className={styles.categoryContainer}>
        <div className={styles.footerCategory}>
          <h2>Follow us on Social Media</h2>
        </div>
        <div className={styles.footerCategory}>
          <h2>Contact Info</h2>
        </div>
      </div>
    </main>
  );
}
