import { useParams } from "react-router-dom";

import { useGetInventories } from "@/inventory/hooks";
import InventoryListView from "./InventoryListView";
import { useDeleteInventory } from "../../hooks/inventoryHooks";
import { downloadPdf, downloadDocPdf } from "../../services/inventoryPdf";
import { inventoryService } from "@/inventory/services";

export default function InventoryList() {
  const inventories = useGetInventories();
  const deleteInventory = useDeleteInventory();

  const handleDeleteInventory = (inventory) => {
    deleteInventory(inventory);
  };

  const handleDownloadInventory = (id) => {
    const inventory = inventoryService.findOne(id);
    downloadPdf(inventory);
  };

  const handleDownload = (id) => {
    const inventory = inventoryService.findOne(id);
    downloadDocPdf(inventory);
  };

  return (
    <InventoryListView
      inventories={inventories}
      handleDeleteInventory={handleDeleteInventory}
      handleDownloadInventory={handleDownloadInventory}
      handleDownload={handleDownload}
    />
  );
}
