import { Component } from "react";
import { connect } from "react-redux";
import { showMenuByFB } from "../../menu/state/MenuAction"
import { addOrder } from "../state/OrderAction";
import OrderQtyItem from "./OrderQtyItem";
import MenuService from "../../../service/MenuService";

class OrderMenu extends Component {
    constructor(props) {
        super(props);
        this.service = MenuService();
        this.state = {
            menuList : [],
            menuSelected: {},
            isViewQty: false
        }
    }

    onGetMenus = async () => {
        this.setState({
            isLoading:true
        })
        try {
            const foods = this.getMenuByCategory('Food');
            const beverages = this.getMenuByCategory('Beverage');
            this.props.showMenuByFB(foods, beverages)
        } catch (e) {
            alert('oops.. something went wrong')
        } finally{
            this.setState({
                isLoading: false
            })
        }
        
    }

    componentDidMount() {
        this.onGetMenus();
    }

    handleGetMenuByCategory = (category) => {
        if (category == 'Food') {
            this.setState({
                menuList: this.props.menuRedu.foods
            })
        } 
        
        if (category == 'Beverage') {
            this.setState({
                menuList: this.props.menuRedu.beverages
            })
        }
    }

    handleViewQty = (menu) => {
        this.setState({
            isViewQty: !this.state.isViewQty,
            menuSelected: menu
        })
    }
    
    handleAddOrder = (qty) => {
        this.props.addOrder(this.state.menuSelected, qty)
        this.setState({
            isViewQty: false
        })
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className onClick={() => this.handleGetMenuByCategory('Food')}>Food</div>
                    <div className onClick={() => this.handleGetMenuByCategory('Beverage')}>Beverage</div>
                </div>
            <div></div>
            <div>
                {
                    this.state.menuList.map((menu) => {
                        return (<div key = {menu.id}>{menu.menuName}</div>)
                    })
                }
            </div>
            {this.state.isViewQty && <OrderQtyItem onAddOrder={this.handleAddOrder} onCancel={this.handleViewQty}/>}
            </div>
        )
    }
}

const mapDispatchToProps = {
    showMenuByFB, addOrder
}

const mapStateToProps = (state) => {
    return {
        menuRedu: state.menuReducer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderMenu)