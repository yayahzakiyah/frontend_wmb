import { Component } from "react";

class OrderQtyItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            qty: 1
        }
    }

    handleChangeQty = (e) => {
        const qty = e.target.vale;
        this.setState({
            qty: e.target.value
        })
    }

    handleAddOrder = () => {
        this.props.onAddOrder(this.state.qty)
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <label>Quantity</label>
                        <input type='number' value={this.state.qty} onChange={this.handleChangeQty}/>
                    </div>
                    <div>
                        <button onClick={this.handleAddOrder}>Add</button>
                        <button onClick={() => this.props.onCancel()}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderQtyItem