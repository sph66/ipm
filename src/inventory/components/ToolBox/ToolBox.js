import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import ToolBoxView from "./ToolBoxView";
import { search } from "../../slices/searchProducSlice";
import { useGetInventory, useInventoryTotal } from "../../hooks/inventoryHooks";
import { downloadPdf, downloadDocPdf } from "../../services/inventoryPdf";
import { inventoryService } from "@/inventory/services";

export default function ToolBox() {
  const dispatch = useDispatch();
  const params = useParams();
  const inventory = useGetInventory(params.id);
  const total = useInventoryTotal(params.id);

  const [numberProd, setNumberProd] = useState(0);

  useEffect(() => {
    if (!inventory) {
      return;
    }
    const { products } = inventory;

    if (products) {
      setNumberProd(products.length);
    }
  }, [inventory]);

  const handleProductSearchOnChange = (val) => {
    const a = search(val);
    dispatch(a);
  };

  const handleDownloadInventory = () => {
    const inventory = inventoryService.findOne(params.id);
    downloadPdf(inventory);
  };

  const handleDownload = () => {
    const inventory = inventoryService.findOne(params.id);
    downloadDocPdf(inventory);
  };

  return (
    <ToolBoxView
      total={total}
      numberProd={numberProd}
      handleProductSearchOnChange={handleProductSearchOnChange}
      handleDownloadInventory={handleDownloadInventory}
      handleDownload={handleDownload}
    />
  );
}
