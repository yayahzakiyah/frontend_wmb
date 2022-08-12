import { Component } from "react";
import '../../component/MenuList/MenuList.css'
import { UseMenu } from "../../UseMenu";

const MenuList = (props) => {
    const {menus, handleShowingForm} = UseMenu()
    return(
        <div className="table">
                <div className="menu-list-table">
                <h2 className="menu-list-header menu-list-color">Menu List</h2>
                <button className="menu-list-action" onClick={() => {props.onShowingForm(true)}}>Add Menu</button>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Menu Name</th>
                            <th>Price</th>
                            {/* <th>Category</th> */}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {menus.map((menu) => (
                            <tr key={menu.id}>
                                <td>{menu.menuName}</td>
                                <td>{menu.price}</td>
                                {/* <td>{menu.category}</td> */}
                                <td>
                                    <button onClick={() => this.props.onDelete(menu.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>              
            </div>
        </div>
            
        )
}

export default MenuList