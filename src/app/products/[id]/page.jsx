import PrimaryButton from "../../../../components/client/PrimaryButton";
import ProductImageDisplayer from "../../../../components/client/ProductImageDisplayer";
import QuantityAddToCart from "../../../../components/client/QuantityAddToCart";
import { products, getProduct } from "../../../../products";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return products.map((p) => {
    id: p.productID;
  });
}

export default function ProductPage({ params }) {
  const selectedProduct = getProduct(params.id);
  return (
    <main className={styles.container}>
      <div className={styles.productContainer}>
        <ProductImageDisplayer
          product={selectedProduct}
        ></ProductImageDisplayer>
        <div className={styles.productDetailsContainer}>
          <h1>{selectedProduct.productName}</h1>
          <p>{selectedProduct.productPrice}$</p>
          <QuantityAddToCart
            productID={selectedProduct.productID}
          ></QuantityAddToCart>
          <h2>Product Description</h2>
          <p>{selectedProduct.productDescription}</p>
        </div>
      </div>
    </main>
  );
}
