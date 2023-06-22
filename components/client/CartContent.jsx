"use client";
import styles from "./CartContent.module.css";
import { useCartContext } from "./CartContext";
import { products, getProduct } from "../../products";
import PrimaryButton from "./PrimaryButton";
import Image from "next/image";
export default function CartContent() {
  const [cartContent, setCartContent, , removeFromCart] = useCartContext();
  return (
    <table className={styles.tableContainer}>
      <thead>
        <tr className={styles.headerContainer}>
          <th></th>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cartContent.map((x) => {
          const selectedProduct = getProduct(x.productID);
          return (
            <tr key={x.productID} className={styles.dataContainer}>
              <td className={styles.removeButtonTD}>
                <button
                  className={styles.removeButton}
                  onClick={() => {
                    removeFromCart(selectedProduct.productID);
                  }}
                >
                  X
                </button>
              </td>
              <td>
                <Image
                  src={selectedProduct.productThumbnailPath}
                  className={styles.tableProductThumbnail}
                  alt="Product thumbnail"
                  width={1892}
                  height={1430}
                  style={{ width: "100%", height: "auto" }}
                ></Image>
              </td>
              <td>
                <div className={styles.productSection}>
                  <p className={styles.mobileHeader}>Product:</p>
                  <p>{selectedProduct.productName}</p>
                </div>
              </td>
              <td>
                <div className={styles.productSection}>
                  <p className={styles.mobileHeader}>Price:</p>
                  <p>{selectedProduct.productPrice}</p>
                </div>
              </td>
              <td>
                <div className={styles.productSection}>
                  <p className={styles.mobileHeader}>Quantity:</p>
                  <p>{x.quantity}</p>
                </div>
              </td>
              <td>
                <div className={styles.productSection}>
                  <p className={styles.mobileHeader}>Subtotal:</p>
                  <p>{x.quantity * selectedProduct.productPrice}</p>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
