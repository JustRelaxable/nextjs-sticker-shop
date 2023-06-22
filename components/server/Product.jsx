"use client";
import Link from "next/link";
import LinkPrimary from "./LinkPrimary";
import styles from "./Product.module.css";
import PrimaryButton from "../client/PrimaryButton";
import { useCartContext } from "../../contexts/CartContext";
import { products, getProduct } from "../../products";
import Image from "next/image";
export default function Product({ children, price, isDiscounted, id }) {
  const [cartContent, setCartContent, addToCart] = useCartContext();
  const selectedProduct = getProduct(id);
  return (
    <div className={styles.container}>
      {isDiscounted && <div className={styles.saleBadge}>SALE</div>}
      <Link href={`/products/${id}`} className={styles.productLink}>
        <Image
          src={selectedProduct.productThumbnailPath}
          width={1892}
          height={1430}
          style={{
            width: "100%",
            height: "auto",
          }}
          sizes="100vw"
          alt="Product Image"
        ></Image>
        <h3 className={styles.productName}>{children}</h3>
      </Link>
      <p className={styles.productPrice}>{price}$</p>
      <PrimaryButton
        onClick={() => {
          addToCart(id, 1);
        }}
      >
        Add to Card
      </PrimaryButton>
    </div>
  );
}
