const PRODUCTS_STORAGE_KEY = "products";

export const findAllProducts = () => {
  const storageProducts = localStorage.getItem(PRODUCTS_STORAGE_KEY);

  return storageProducts ? JSON.parse(storageProducts) : [];
};

export const addProduct = (product) => {
  const products = findAllProducts();

  const id =
    1 +
    products.reduce((maxId, { id }) => {
      return Math.max(maxId, id);
    }, 0);

  product.id = id;
  products.push(product);
  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));

  return product;
};

export const deleteProduct = (id) => {
  const products = findAllProducts();

  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products.splice(i, 1);
    }
  }

  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));

  return products;
};
