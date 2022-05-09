import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductsView from "./ProductsView";
import { parsePrice } from "@/core/utils/parsers";
import {
  useAddProducts,
  useGetInventory,
  useDeleteProducts,
  useUpdateProduct,
} from "@/inventory/hooks";

export default function Products() {
  const searchString = useSelector((state) => {
    return state.searchProduct.value;
  });

  const params = useParams();

  const inventory = useGetInventory(params.id, searchString);

  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState("");
  const addProducts = useAddProducts();
  const deleteProduct = useDeleteProducts();
  const updateProducts = useUpdateProduct();

  useEffect(() => {
    if (amount > 0 && price > 0) {
      setTotal(amount * price);
    } else {
      setTotal(0);
    }
  }, [amount, price]);

  const saveProducts = () => {
    if (!product || !(price > 0) || !(amount > 0)) {
      return;
    }

    const anotherProduct = {
      produs: product,
      cantitate: parseFloat(amount),
      pret: parseFloat(price),
      total: total,
    };

    addProducts({ id: inventory.id, product: anotherProduct });
    setProduct("");
    setPrice("");
    setAmount("");
  };

  const updateProduct = (updateData) => {
    updateProducts(updateData);
  };

  const handleEnter = () => {
    saveProducts();
  };

  const handleChangeProduct = (val) => {
    setProduct(val);
  };

  const handleChangeAmount = (val) => {
    setAmount(val);
  };

  const handleChangePrice = (val) => {
    setPrice(val);
  };

  const handleDeleteProduct = (deletedProductId) => {
    deleteProduct(deletedProductId);
  };

  return (
    <ProductsView
      handleChangeAmount={handleChangeAmount}
      handleChangePrice={handleChangePrice}
      handleChangeProduct={handleChangeProduct}
      products={inventory?.products || []}
      total={total}
      handleEnter={handleEnter}
      handleDeleteProduct={handleDeleteProduct}
      updateProduct={updateProduct}
      product={product}
      price={price}
      amount={amount}
    />
  );
}
