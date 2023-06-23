"use client";
import styles from "./CartAddedNotification.module.css";
import { useEffect, useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import Link from "next/link";

export default function CartAddedNotification() {
  const [cartContent] = useCartContext();
  const [cartQuantity, setCartQuantity] = useState(0);
  const [containerVisible, setContainerVisible] = useState(false);
  const [containerOpacity, setContainerOpacity] = useState(0);

  function getCartContentQuantity() {
    console.log(cartContent);
    return cartContent?.reduce((acc, c) => {
      return (acc += c.quantity);
    }, 0);
  }

  useEffect(() => {
    let timeout;
    let opacityTimeout;
    const currentCartQuantity = getCartContentQuantity();
    if (currentCartQuantity > cartQuantity) {
      setContainerVisible(true);
      setContainerOpacity(1);
      timeout = setTimeout(() => {
        setContainerVisible(false);
      }, 4000);
      opacityTimeout = setTimeout(() => {
        setContainerOpacity(0);
      }, 3000);
    }
    setCartQuantity(currentCartQuantity);
    return () => {
      clearTimeout(timeout);
      clearTimeout(opacityTimeout);
    };
  }, [cartContent]);

  return (
    <div
      className={`${styles.container} ${containerVisible && styles.visible}`}
      style={{ opacity: containerOpacity }}
    >
      <p>Product successfully added to cart!</p>
      <Link href="/cart">Go to Cart</Link>
    </div>
  );
}
