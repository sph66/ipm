import { Header } from '@/core/components';
import { inventory } from '@/core/components'
import InventoryListView from './inventory/components/InventoryList/InventoryListView';

  function App() {
  return (
    <div>
      <Header />
      <InventoryListView />
    </div>
  );
}

export default App;
