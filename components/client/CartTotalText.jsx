"use client";
import { useCartContext } from "../../contexts/CartContext";
import { products, getProduct } from "../../products";
export default function CartTotalText({ className }) {
  const [cartContent] = useCartContext();
  const totalPrice = cartContent?.reduce((acc, p) => {
    const selectedProduct = getProduct(p.productID);
    return acc + selectedProduct.productPrice * p.quantity;
  }, 0);
  return <p>{totalPrice}$</p>;
}
