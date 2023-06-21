"use client";
import { useState } from "react";
import styles from "./ProductImageDisplayer.module.css";
export default function ProductImageDisplayer({ product }) {
  const [currentImageSrc, setCurrentImageSrc] = useState(
    product.productThumbnailPath
  );
  return (
    <div className={styles.productImageContainer}>
      <img src={currentImageSrc} className={styles.productShowcaseImage}></img>
      <div className={styles.productImages}>
        {product.productImages.map((i) => (
          <img
            key={i}
            src={i}
            onClick={() => {
              setCurrentImageSrc(i);
            }}
          ></img>
        ))}
      </div>
    </div>
  );
}
