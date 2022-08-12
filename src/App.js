import './App.css';
import OrderView from './feature/order/OrderView';
import OrderQty from './feature/order/component/OrderQtyItem';
import OrderMenu from './feature/order/component/OrderMenu';
import { AppRouter } from './navigation/AppRouter';

function App() {
  return (
    <div>
      <AppRouter/>
    </div>
  );
}

export default App;
