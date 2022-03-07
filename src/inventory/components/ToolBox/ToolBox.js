import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ToolBoxView from "./ToolBoxView";
import { search } from "../../slices/searchProducSlice";

export default function ToolBox() {
  const [total, setTotal] = useState(0);
  const [numberProd, setNumberProd] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const { products } = JSON.parse(localStorage.getItem("inventory"));
    if (products) {
      let sum = 0;
      for (let i = 0; i < products.length; i++) {
        sum = sum + products[i].cantitate * products[i].pret;
      }
      setTotal(sum);
      setNumberProd(products.length);
    }
  }, []);

  const handleProductSearchOnChange = (val) => {
    const a = search(val);
    dispatch(a);
  };

  return (
    <ToolBoxView
      total={total}
      numberProd={numberProd}
      handleProductSearchOnChange={handleProductSearchOnChange}
    />
  );
}
