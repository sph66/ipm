import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  useGetInventory,
  useUpdateInventoryDetails,
} from "../../hooks/inventoryHooks";
import { updateInventoryDetails } from "../../services/inventoryService";
import InventoryDetailsView from "./InventoryDetailsView";

export default function InventoryDetails() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [obs, setObs] = useState("");

  const params = useParams();

  const inventory = useGetInventory(params.id);

  const updateInventoryDetails = useUpdateInventoryDetails();

  useEffect(() => {
    const { an, observatii, titlu } = inventory || {};

    if (an) {
      setYear(an);
    }
    if (observatii) {
      setObs(observatii);
    }
    if (titlu) {
      setTitle(titlu);
    }
  }, [inventory]);

  useEffect(() => {
    saveInventory();
  }, [title, year, obs]);

  const saveInventory = () => {
    if (!inventory?.id) {
      return;
    }

    updateInventoryDetails({
      inventoryId: inventory.id,
      inventoryDetails: {
        titlu: title,
        an: year,
        observatii: obs,
      },
    });
  };

  function handleChangeTitle(val) {
    setTitle(val);
  }

  function handleChangeYear(val) {
    setYear(val);
  }

  function handleChangeObs(val) {
    setObs(val);
  }

  return (
    <InventoryDetailsView
      handleChangeTitle={handleChangeTitle}
      handleChangeYear={handleChangeYear}
      handleChangeObs={handleChangeObs}
      title={title}
      year={year}
      obs={obs}
    />
  );
}
