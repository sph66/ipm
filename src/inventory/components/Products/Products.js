import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ProductsView from "./ProductsView";
import { parsePrice } from "./parsers";

export default function Products() {
  const [products, setProducts] = useState([]);

  const searchString = useSelector((state) => {
    return state.searchProduct.value;
  });

  useEffect(() => {
    const { products: items } = JSON.parse(localStorage.getItem("inventory"));
    if (items) {
      setProducts(
        items.filter((item) => item.produs.indexOf(searchString) > -1)
      );
    }
  }, [searchString]);

  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState("");

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
    const inventory = JSON.parse(localStorage.getItem("inventory"));
    const anotherProduct = {
      id:
        inventory.products.reduce((maxId, { id }) => {
          return Math.max(maxId, id);
        }, 0) + 1,
      produs: product,
      cantitate: parseFloat(amount),
      pret: parseFloat(price),
      total: total,
    };
    inventory.products.push(anotherProduct);
    setProducts(inventory.products);
    setProduct("");
    setPrice("");
    setAmount("");
    localStorage.setItem("inventory", JSON.stringify(inventory));
  };
  console.log(product);
  const updateProduct = (updatedData) => {
    const inventory = JSON.parse(localStorage.getItem("inventory"));
    for (let i = 0; i < inventory.products.length; i++) {
      if (inventory.products[i].id == updatedData.id) {
        let currentProduct = inventory.products[i];
        currentProduct[updatedData.field] =
          updatedData.field == "price"
            ? parsePrice(updatedData.value)
            : updatedData.value;
        currentProduct.total =
          parseFloat(currentProduct.pret) *
          parseFloat(currentProduct.cantitate);
      }
    }
    localStorage.setItem("inventory", JSON.stringify(inventory));
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
    const inventory = JSON.parse(localStorage.getItem("inventory"));
    for (let i = 0; i < inventory.products.length; i++) {
      if (inventory.products[i].id == deletedProductId) {
        inventory.products.splice(i, 1);
      }
    }
    setProducts(inventory.products);
    localStorage.setItem("inventory", JSON.stringify(inventory));
  };

  return (
    <ProductsView
      handleChangeAmount={handleChangeAmount}
      handleChangePrice={handleChangePrice}
      handleChangeProduct={handleChangeProduct}
      products={products}
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
