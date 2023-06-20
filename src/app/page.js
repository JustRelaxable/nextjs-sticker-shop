import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Homepage</h1>
      <div>
        <p>Check our latest added items!</p>
      </div>
      <div>{/* Product div */}</div>
      <div>{/* Three dot */}</div>
      <div>
        <p>Check out time limited discounted items!</p>
      </div>
      <div>{/* Product div */}</div>
      <div>
        <p>Check out product by categories!</p>
      </div>
      <div>
        <div>
          <h2>Stickers</h2>
          <Link href="/stickers">Go to Stickers Page!</Link>
        </div>
        <div>
          <h2>Patterns</h2>
          <Link href="/stickers">Go to Patterns Page!</Link>
        </div>
      </div>
      <footer>{/* Contact footer */}</footer>
    </main>
  );
}
