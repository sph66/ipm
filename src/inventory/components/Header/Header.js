import { useNavigate } from "react-router-dom";

import HeaderView from "./HeaderView";
import { useAddInventory } from "../../hooks/inventoryHooks";

export default function Header() {
  const addInventory = useAddInventory();
  let navigate = useNavigate();

  const handleOnClickInventory = async () => {
    const inventory = await addInventory();

    navigate(`/inventory/${inventory.id}`);
  };

  return <HeaderView handleOnClickInventory={handleOnClickInventory} />;
}
