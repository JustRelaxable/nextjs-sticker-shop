import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ProductHeader from "../../components/server/ProductHeader";
import ShopCategory from "../../components/server/ShopCategory";
import Product from "../../components/server/Product";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1>Homepage</h1>
      <ProductHeader>Check our latest added items!</ProductHeader>
      <div className={styles.productContainer}>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
      <ProductHeader>Check out time limited discounted items!</ProductHeader>
      <div className={styles.productContainer}>
        <Product></Product>
      </div>
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
      <footer>{/* Contact footer */}</footer>
    </main>
  );
}
