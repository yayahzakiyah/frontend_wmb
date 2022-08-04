import OrderList from "./component/OrderList";
import OrderMenu from "./component/OrderMenu";
import './OrderView.css';

function OrderView() {
    return (
        <div className="order-container">
            <div className="order-menu-container">
                <OrderList/>
            </div>
            <div className="order-list-container">
                <OrderMenu/>
            </div>
        </div>
    )
}

export default OrderView