import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setEditableDebt } from "../../slices/debtSlice";
import { findOne } from "../../services/debtService";
import { useUpdateDebt } from "../../hooks/debtHooks";
import DebtEditView from "./DebtEditView";

export default function DebtEdit() {
  const [paymentAmount, setPaymentAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const updateDebt = useUpdateDebt();
  const dispatch = useDispatch();

  const editableDebtId = useSelector((state) => {
    return state.editableDebt.id;
  });

  const client = findOne(editableDebtId);

  useEffect(() => {
    console.log(paymentAmount, client?.payment);
    if (paymentAmount > client?.payment) {
      setErrorMessage("Ai introdus o valoare mai mare decat valoarea de plata");
    } else if (paymentAmount < 0) {
      setErrorMessage(" Te rog sa introduci o valoare mai mare decat zero ");
    } else {
      setErrorMessage("");
    }
  }, [paymentAmount]);

  if (editableDebtId == null) {
    return null;
  }
  const payPartialDebt = () => {
    updateDebt({ id: client.id, paymentAmount });
  };

  const handleChangePayment = (val) => {
    console.log(val, parseFloat(val));
    setPaymentAmount(val ? parseFloat(val) : val);
  };

  const handleSavePayment = () => {
    payPartialDebt();

    const action = setEditableDebt(null);
    dispatch(action);
  };

  return (
    <DebtEditView
      errorMessage={errorMessage}
      handleChangePayment={handleChangePayment}
      handleSavePayment={handleSavePayment}
    />
  );
}
