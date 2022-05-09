import { useQuery, useQueryClient, useMutation } from "react-query";
import { productsService } from "@/products/services";

export const useGetProducts = () => {
  const { data } = useQuery("products", productsService.findAllProducts);

  return data;
};

export const useAddProduct = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(productsService.addProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  return mutation.mutate;
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(productsService.deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  return mutation.mutate;
};
