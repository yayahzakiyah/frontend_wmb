import {Component} from "react";
import TableForm from "./component/TableForm/TableForm";
import TableList from "./component/TableList/TableList";

class TableView extends Component {
    onUpdateForm = () => {
        this.setState({
            isFormUpdated: true
        })
    }

    render() {
        return (
            <>
                <TableForm handleFormUpdate={this.onUpdateForm}/>
                <TableList/>
            </>
        )
    }
}
export default TableView;