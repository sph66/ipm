import { useState, useEffect } from "react";
import InventoryDetailsView from "./InventoryDetailsView";

export default function InventoryDetails() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [obs, setObs] = useState("");

  useEffect(() => {
    const { an, observatii, titlu } = JSON.parse(
      localStorage.getItem("inventory")
    );

    if (an) {
      setYear(an);
    }
    if (observatii) {
      setObs(observatii);
    }
    if (titlu) {
      setTitle(titlu);
    }
  }, []);

  useEffect(() => {
    saveInventory();
  }, [title, year, obs]);

  const saveInventory = () => {
    const inventory = JSON.parse(localStorage.getItem("inventory"));
    inventory.titlu = title;
    inventory.an = year;
    inventory.observatii = obs;
    localStorage.setItem("inventory", JSON.stringify(inventory));
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
