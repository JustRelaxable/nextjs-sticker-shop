import PrimaryButton from "../../../../components/client/PrimaryButton";
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
          <div className={styles.quantityContainer}>
            <input type="number" value={1}></input>
            <PrimaryButton>Add to Cart</PrimaryButton>
          </div>
        </div>
      </div>
    </main>
  );
}
