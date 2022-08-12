import { Component } from "react";
import { connect } from "react-redux";
// import { clearOrder } from "../state/OrderAction";

class OrderList extends Component{
    handleClearOrder = () => {
        this.props.clearOrder()
    }
    
    render(){
        return (
            <div>
                {
                    this.props.order.orderMenus.map((ord, idx) => {
                        return (
                            <div key={idx}>
                                <div>{ord.qty}{ord.menu.menuName}</div>
                                <div>{ord.menu.price * ord.qty}</div>
                            </div>)
                    })
                }
                {
                    this.props.order.orderMenus.length > 0 ? <>
                        <div>
                        <div>Total</div>
                        {this.props.order.total}
                        </div>
                    <br/>
                    <div>Order</div>
                    <div onClick={this.handleClearOrder}>Cancel</div>
                    </>:<div>
                        <div>No Items</div>
                    </div>
                }
            </div>
        )
    }
}

const mapDispatchToProps = {
    // clearOrder
}

const mapStateToProps = state => {
    return {
        order: state.orderReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (OrderList)