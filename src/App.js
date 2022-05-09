import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage, InventoryPage } from "@/inventory/pages";
import { DebtBookPage } from "@/debt/pages";
import { ProductsPage } from "@/products/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory/:id" element={<InventoryPage />} />
        <Route path="/debt" element={<DebtBookPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
