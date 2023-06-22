"use client";
import { useState } from "react";
import styles from "./ProductImageDisplayer.module.css";
import Image from "next/image";
export default function ProductImageDisplayer({ product }) {
  const [currentImageSrc, setCurrentImageSrc] = useState(
    product.productThumbnailPath
  );
  return (
    <div className={styles.productImageContainer}>
      <Image
        src={currentImageSrc}
        className={styles.productShowcaseImage}
        width={1892}
        height={1430}
        style={{
          width: "100%",
        }}
        alt="Product thumbnail"
      />
      <div className={styles.productImages}>
        {product.productImages.map((i) => (
          <Image
            key={i}
            src={i}
            width={1892}
            height={1430}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            onClick={() => {
              setCurrentImageSrc(i);
            }}
            alt="Product images"
          />
        ))}
      </div>
    </div>
  );
}
