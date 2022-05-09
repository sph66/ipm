import { useEffect, useState } from "react";
import moment from "moment";

import DebtDetailsView from "./DebtDetailsView";
import { debtService } from "@/debt/services";
import { useAddDebt } from "@/debt/hooks";

export default function DebtDetails() {
  const [client, setClient] = useState("");
  const [payment, setPayment] = useState("");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const addDebt = useAddDebt();

  const saveDebt = () => {
    if (!client || !payment) {
      return;
    }

    const anotherClient = {
      client: client,
      payment: payment,
      date: date,
    };
    addDebt(anotherClient);

    setClient("");
    setPayment("");
    setDate(moment().format("YYYY-MM-DD"));
  };

  const handleSave = () => {
    saveDebt();
  };

  const handleChangeName = (val) => {
    setClient(val);
  };

  const handleChangePayment = (val) => {
    setPayment(val);
  };

  const handleChangeDate = (val) => {
    setDate(val);
  };

  return (
    <DebtDetailsView
      handleChangePayment={handleChangePayment}
      handleChangeName={handleChangeName}
      handleChangeDate={handleChangeDate}
      handleSave={handleSave}
      client={client}
      payment={payment}
      date={date}
    />
  );
}
