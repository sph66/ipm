import { useState } from "react";

import { useAddProduct } from "@/products/hooks";
import ProductsDetailsView from "./ProductsDetailsView";

export default function ProductsDetails() {
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState("");
  const [details, setDetails] = useState("");
  const addProduct = useAddProduct();

  const saveProduct = () => {
    if (!product || !details || !price) {
      return;
    }

    const anotherProduct = {
      product: product,
      price: price,
      details: details,
    };
    addProduct(anotherProduct);

    setProduct("");
    setPrice("");
    setDetails("");
  };

  const handleSaveProduct = () => {
    saveProduct();
  };

  const handleChangeDetails = (val) => {
    setDetails(val);
  };

  const handleChangePrice = (val) => {
    setPrice(val);
  };

  const handleChangeProduct = (val) => {
    setProduct(val);
  };

  return (
    <ProductsDetailsView
      handleChangeProduct={handleChangeProduct}
      handleChangeDetails={handleChangeDetails}
      handleChangePrice={handleChangePrice}
      handleSaveProduct={handleSaveProduct}
      product={product}
      price={price}
      details={details}
    />
  );
}
