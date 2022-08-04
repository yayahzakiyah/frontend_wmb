import { Component } from "react";
import { menus } from "../../../data";
import '../component/MenuList.css';

class MenuList extends Component{
    onDelete = (id) => {
        const response = window.confirm('delete?')
        if (response) {
            const index = menus.findIndex(menu => menu.id === id);
            menus.splice(index, 1);
            this.setState({})
        }
    }

    render(){
        return(
            <div className="menu-list-table">
                <h2 className="menu-list-header menu-list-color">Menu List</h2>
                <button className="menu-list-action" onClick={() => {
                    this.props.onShowingForm(true)
                }}>Add Menu</button>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Menu Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {menus.map((menu) => (
                            <tr key={menu.id}>
                                <td>{menu.menuName}</td>
                                <td>{menu.price}</td>
                                <td>{menu.category}</td>
                                <td>
                                    <button onClick={() => this.onDelete(menu.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>              
            </div>
        )
    }
}

export default MenuList