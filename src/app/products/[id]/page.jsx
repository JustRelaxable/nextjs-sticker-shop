import PrimaryButton from "../../../../components/client/PrimaryButton";
import QuantityAddToCart from "../../../../components/client/QuantityAddToCart";
import { products, getProduct } from "../../../../products";
import styles from "./page.module.css";
export default function ProductPage({ params }) {
  const selectedProduct = getProduct(params.id);
  return (
    <main className={styles.container}>
      <div className={styles.productContainer}>
        <div className={styles.productImageContainer}>
          <img
            src={selectedProduct.productThumbnailPath}
            className={styles.productShowcaseImage}
          ></img>
        </div>
        <div className={styles.productDetailsContainer}>
          <h1>{selectedProduct.productName}</h1>
          <p>{selectedProduct.productPrice}$</p>
          <QuantityAddToCart
            productID={selectedProduct.productID}
          ></QuantityAddToCart>
        </div>
      </div>
    </main>
  );
}
