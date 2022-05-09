import { parsePrice } from "@/core/utils/parsers";

const INVENTORY_STORAGE_KEY = "inventories";

export const findAll = () => {
  const storageInventories = localStorage.getItem(INVENTORY_STORAGE_KEY);

  const inventories = storageInventories ? JSON.parse(storageInventories) : [];

  return inventories;
};

export const findInventories = () => {
  const inventories = findAll();

  return inventories.map((inventory) => ({
    id: inventory.id,
    title: inventory.titlu,
    year: inventory.an,
    total: calculateInventoryTotal(inventory),
  }));
};

export const findOne = (id, search = "") => {
  const inventories = findAll();

  const inventory = inventories.find((inventory) => inventory.id == id);

  if (!search || !inventory.products) {
    return inventory;
  }

  inventory.products = inventory.products.filter(
    (item) => item.produs.indexOf(search) > -1
  );

  return inventory;
};

export const addProduct = (id, product) => {
  const inventories = findAll();

  const inventoryOriginal = inventories.find((inventory) => inventory.id == id);
  const inventory = { ...inventoryOriginal };

  const productId =
    1 +
    inventory.products.reduce((maxId, { id: prodId }) => {
      return Math.max(maxId, prodId);
    }, 0);
  product.id = productId;

  inventory.products.push(product);
  localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventories));

  return product;
};

export const deleteProduct = (inventoryId, productId) => {
  const inventories = findAll();

  const inventory = inventories.find(
    (inventory) => inventory.id == inventoryId
  );

  for (let i = 0; i < inventory.products.length; i++) {
    if (inventory.products[i].id == productId) {
      inventory.products.splice(i, 1);
    }
  }
  localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventories));

  return inventory;
};

export const updateProduct = (inventoryId, updatedData) => {
  const inventories = findAll();

  const inventory = inventories.find(
    (inventory) => inventory.id == inventoryId
  );

  for (let i = 0; i < inventory.products.length; i++) {
    if (inventory.products[i].id == updatedData.id) {
      let currentProduct = inventory.products[i];
      currentProduct[updatedData.field] =
        updatedData.field == "price"
          ? parsePrice(updatedData.value)
          : updatedData.value;
      currentProduct.total =
        parseFloat(currentProduct.pret) * parseFloat(currentProduct.cantitate);
    }
  }
  localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventories));

  return inventory;
};

export const updateInventoryDetails = (inventoryId, inventoryDetails) => {
  const inventories = findAll();

  let inventory = inventories.find((inventory) => inventory.id == inventoryId);

  Object.assign(inventory, inventoryDetails);

  localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventories));

  return inventory;
};

const calculateInventoryTotal = (inventory) => {
  const { products } = inventory;
  let total = 0;
  if (products) {
    for (let i = 0; i < products.length; i++) {
      total = total + products[i].cantitate * products[i].pret;
    }
  }
  return total;
};

export const getInventoryTotal = (inventoryId) => {
  let inventory = findOne(inventoryId);

  return calculateInventoryTotal(inventory);
};

export const addInventory = () => {
  const inventories = findAll();
  const newInventory = {
    products: [],
  };

  const inventoryId =
    1 +
    inventories.reduce((maxId, { id: newId }) => {
      return Math.max(maxId, newId);
    }, 0);
  newInventory.id = inventoryId;

  inventories.push(newInventory);
  localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventories));

  return newInventory;
};

export const deleteInventory = (inventoryId) => {
  const inventories = findAll();

  for (let i = 0; i < inventories.length; i++) {
    if (inventories[i].id == inventoryId) {
      inventories.splice(i, 1);
    }
  }

  localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventories));

  return inventories;
};
