import { useQuery, useQueryClient, useMutation } from "react-query";
import { inventoryService } from "@/inventory/services";

export const useGetInventory = (id, search) => {
  const { data } = useQuery(["inventory", id, search], () =>
    inventoryService.findOne(id, search)
  );

  return data;
};

export const useAddProducts = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    ({ id, product }) => inventoryService.addProduct(id, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("inventory");
        queryClient.invalidateQueries("inventoryTotal");
      },
    }
  );

  return mutation.mutate;
};

export const useDeleteProducts = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    ({ inventoryId, productId }) =>
      inventoryService.deleteProduct(inventoryId, productId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("inventory");
        queryClient.invalidateQueries("inventoryTotal");
      },
    }
  );

  return mutation.mutate;
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    ({ inventoryId, updatedData }) =>
      inventoryService.updateProduct(inventoryId, updatedData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("inventory");
        queryClient.invalidateQueries("inventoryTotal");
      },
    }
  );

  return mutation.mutate;
};

export const useUpdateInventoryDetails = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    ({ inventoryId, inventoryDetails }) =>
      inventoryService.updateInventoryDetails(inventoryId, inventoryDetails),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("inventory");
      },
    }
  );

  return mutation.mutate;
};

export const useInventoryTotal = (id) => {
  const { data } = useQuery(["inventoryTotal", id], () =>
    inventoryService.getInventoryTotal(id)
  );

  return data;
};

export const useGetInventories = () => {
  const { data } = useQuery("inventories", inventoryService.findInventories);

  return data;
};

export const useAddInventory = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(inventoryService.addInventory, {
    onSuccess: () => {
      queryClient.invalidateQueries("inventories");
    },
  });

  return mutation.mutateAsync;
};

export const useDeleteInventory = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(inventoryService.deleteInventory, {
    onSuccess: () => {
      queryClient.invalidateQueries("inventories");
    },
  });

  return mutation.mutate;
};
