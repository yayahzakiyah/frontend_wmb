import { Component } from "react";
import TableForm from "./TableForm";
import TableList from "./TableList";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm : false
    };
  }

  changeAddForm = () => {
      this.setState({
          addForm : true
      })
  }

  handleSubmit = (data) => {
    this.setState({
        addForm: false,
    })
    this.props.cbSubmitTable(data)
  }

  handleCancel = () => {
      this.setState({
        addForm: false,
      })
  }

  render() {
    return (
      <div className="contrainer">
        <h2>Management Table</h2>
      {this.state.addForm ? <TableForm submitForm = {this.handleSubmit} cancelForm = {this.handleCancel}/> :
        <TableList tables={this.props.tables} addedFormCB = {this.changeAddForm}/>}
      </div>
    );
  }
}

export default Table;