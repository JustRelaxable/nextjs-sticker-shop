const productCategories = {
  Sticker: 0,
  Patttern: 1,
};

const products = [
  {
    productID: 0,
    productName: "Kawaii Food Stickers",
    productDescription: "",
    productPrice: 2.99,
    productCategory: productCategories.Sticker,
    discountRate: 0,
    productThumbnailPath: "/product-thumbnail.webp",
    productImages: [],
  },
  {
    productID: 1,
    productName: "Mushroom Stickers",
    productDescription: "This is a mushroom sticker.",
    productPrice: 2.99,
    productCategory: productCategories.Sticker,
    discountRate: 0,
    productThumbnailPath: "/sticker-pictures/mushroom/1.jpg",
    productImages: [
      "/sticker-pictures/mushroom/1.jpg",
      "/sticker-pictures/mushroom/2.jpg",
      "/sticker-pictures/mushroom/3.jpg",
      "/sticker-pictures/mushroom/4.jpg",
      "/sticker-pictures/mushroom/5.jpg",
      "/sticker-pictures/mushroom/6.jpg",
      "/sticker-pictures/mushroom/7.jpg",
    ],
  },
  {
    productID: 2,
    productName: "Hamster Stickers",
    productDescription: "",
    productPrice: 2.99,
    productCategory: productCategories.Sticker,
    discountRate: 0,
    productThumbnailPath: "/sticker-pictures/hamster/1.jpg",
    productImages: [
      "/sticker-pictures/hamster/1.jpg",
      "/sticker-pictures/hamster/2.jpg",
      "/sticker-pictures/hamster/3.jpg",
      "/sticker-pictures/hamster/4.jpg",
      "/sticker-pictures/hamster/5.jpg",
      "/sticker-pictures/hamster/6.jpg",
      "/sticker-pictures/hamster/7.jpg",
      "/sticker-pictures/hamster/8.jpg",
    ],
  },
  {
    productID: 3,
    productName: "Mermaid Stickers",
    productDescription: "",
    productPrice: 2.99,
    productCategory: productCategories.Sticker,
    discountRate: 0,
    productThumbnailPath: "/sticker-pictures/mermaid/1.jpg",
    productImages: [
      "/sticker-pictures/mermaid/1.jpg",
      "/sticker-pictures/mermaid/2.jpg",
      "/sticker-pictures/mermaid/3.jpg",
      "/sticker-pictures/mermaid/4.jpg",
      "/sticker-pictures/mermaid/5.jpg",
      "/sticker-pictures/mermaid/6.jpg",
      "/sticker-pictures/mermaid/7.jpg",
      "/sticker-pictures/mermaid/8.jpg",
      "/sticker-pictures/mermaid/9.jpg",
      "/sticker-pictures/mermaid/10.jpg",
    ],
  },
  {
    productID: 4,
    productName: "Bubble Tea Stickers",
    productDescription: "",
    productPrice: 2.99,
    productCategory: productCategories.Sticker,
    discountRate: 0.15,
    productThumbnailPath: "/sticker-pictures/bubble-tea/1.jpg",
    productImages: [
      "/sticker-pictures/bubble-tea/1.jpg",
      "/sticker-pictures/bubble-tea/2.jpg",
      "/sticker-pictures/bubble-tea/3.jpg",
      "/sticker-pictures/bubble-tea/4.jpg",
      "/sticker-pictures/bubble-tea/5.jpg",
      "/sticker-pictures/bubble-tea/6.jpg",
      "/sticker-pictures/bubble-tea/7.jpg",
      "/sticker-pictures/bubble-tea/8.jpg",
      "/sticker-pictures/bubble-tea/9.jpg",
    ],
  },
];

function getProduct(id) {
  const filteredProduct = products.find((p) => p.productID == id);
  return filteredProduct;
}

export { products, getProduct };
