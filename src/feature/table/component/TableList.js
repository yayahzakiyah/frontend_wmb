import {Component} from "react";
import {tables} from "./../../../data";
import './TableList.css'

class TableList extends Component {
    onDelete = (id) => {
        const response = window.confirm('Are you sure want to delete ?')
        if (response) {
            const index = tables.findIndex(table => table.id === id);
            tables.splice(index, 1);
            this.setState({})
        }
    }

    render() {
        return (
            <>
                <div className="table-list-table">
                <h2 className="table-list-header table-list-color">Table List</h2>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Table Number</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tables.map((table) => (
                            <tr key={table.id}>
                                <td>{table.tableNumber}</td>
                                <td>{table.status}</td>
                                <td>
                                    <button onClick={() => this.onDelete(table.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                
            </>
        )
    }
}

export default TableList;