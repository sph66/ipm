import { useGetDebts, usePayDebt, useDeleteDebt } from "@/debt/hooks";
import DebtListView from "./DebtListView";
import DebtEditView from "../DebtEdit/DebtEditView";
import { useDispatch } from "react-redux";
import { setEditableDebt } from "../../slices/debtSlice";

export default function DebtList() {
  const clients = useGetDebts();
  const payDebt = usePayDebt();
  const deleteDebt = useDeleteDebt();

  const dispatch = useDispatch();

  const handleClickCheckbox = (id) => {
    payDebt(id);
  };

  const handleClickIcon = (id) => {
    const action = setEditableDebt(id);

    dispatch(action);
  };

  const handleDeleteDebt = (id) => {
    deleteDebt(id);
  };

  return (
    <DebtListView
      clients={clients}
      handleClickCheckbox={handleClickCheckbox}
      handleClickIcon={handleClickIcon}
      handleDeleteDebt={handleDeleteDebt}
    />
  );
}
