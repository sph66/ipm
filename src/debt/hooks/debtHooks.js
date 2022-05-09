import { useQuery, useQueryClient, useMutation } from "react-query";
import { debtService } from "@/debt/services";

export const useGetDebts = () => {
  const { data } = useQuery("debts", debtService.findAll);

  return data;
};

export const useAddDebt = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(debtService.add, {
    onSuccess: () => {
      queryClient.invalidateQueries("debts");
    },
  });

  return mutation.mutate;
};

export const usePayDebt = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(debtService.payDebt, {
    onSuccess: () => {
      queryClient.invalidateQueries("debts");
    },
  });

  return mutation.mutate;
};

export const useUpdateDebt = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(debtService.updateDebt, {
    onSuccess: () => {
      queryClient.invalidateQueries("debts");
    },
  });

  return mutation.mutate;
};

export const useDeleteDebt = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(debtService.deleteDebt, {
    onSuccess: () => {
      queryClient.invalidateQueries("debts");
    },
  });

  return mutation.mutate;
};
