import {Component} from "react";
import TableForm from "./component/TableForm";
import TableList from "./component/TableList";

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