import { Component } from "react";
import LoginPage from "../feature/login/LoginPage";
import MenuView from "../feature/menu/MenuView";
import OrderView from "../feature/order/OrderView";
import TableView from "../feature/table/TableView";
import '../navigation/AppNavigation.css'

class AppNavigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false,
            currentPage: 0
        }
    }

    onNavigate = (page) => {
        this.setState({
            currentPage: page
        })
    }

    onLoggedIn =  (status) => {
        this.setState({
            isAuthenticated: status
        })
    }

    render(){
        const {isAuthenticated, currentPage} = this.state
        return(
            <>
            {
                isAuthenticated?
                <div className="navigation-container">
                    <div className="navigation-sidebar">
                        <li>
                            <a>
                                <i className="fa fa-home"></i>
                                <strong>WMB</strong>
                                <br/>
                                <small>Version 1.2</small>
                            </a>
                        </li>
                        <br></br>
                        <li>
                            <a>
                                <i className="fa"></i>
                                <strong>Transaction</strong>
                                <div onClick={() => this.onNavigate(3)}/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fa"></i>
                                <div onClick={() => this.onNavigate(1)}>
                                    <strong>Menu</strong>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fa"></i>
                                <div onClick={() => this.onNavigate(2)}>
                                    <strong>Table</strong>
                                </div>
                            </a>
                        </li>
                        <button className="navigation-logout" onClick={() => this.onLoggedIn(false)}>Logout</button>
                    </div>
                    <div className="navigation-content">
                        {currentPage === 1 && <MenuView/>}
                        {currentPage === 2 && <TableView/>}
                        {currentPage === 3 && <OrderView/>}
                    </div>
                </div>:
                //  <LoginView handleLoggedIn={this.onLoggedIn}/>
                 <LoginPage handleLoggedIn={this.onLoggedIn}/>
            }
            
            </>
        )
    }
}

export default AppNavigation