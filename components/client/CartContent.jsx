"use client";
import styles from "./CartContent.module.css";
import { useCartContext } from "./CartContext";
import { products, getProduct } from "../../products";
import PrimaryButton from "./PrimaryButton";
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
              <td>
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
                <img
                  src={selectedProduct.productThumbnailPath}
                  className={styles.tableProductThumbnail}
                ></img>
              </td>
              <td>{selectedProduct.productName}</td>
              <td>{selectedProduct.productPrice}$</td>
              <td>{x.quantity}</td>
              <td>{x.quantity * selectedProduct.productPrice}$</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
