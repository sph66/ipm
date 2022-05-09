import { useGetProducts, useDeleteProduct } from "@/products/hooks";

import ProductsListView from "./ProductsListView";

export default function ProductsList() {
  const products = useGetProducts();
  const deleteProduct = useDeleteProduct();

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };

  return (
    <ProductsListView
      products={products}
      handleDeleteProduct={handleDeleteProduct}
    />
  );
}
