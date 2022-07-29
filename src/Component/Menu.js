import { Component } from "react";
import MenuForm from "./MenuForm";
import MenuTable from "./MenuTable";

class Menu extends Component {
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
    this.props.cbSubmitMenu(data)
  }

  handleCancel = () => {
      this.setState({
        addForm: false,
      })
  }

  render() {
    return (
      <div className="contrainer">
        <h2>Management Menu</h2>
          {this.state.addForm ? <MenuForm submitForm = {this.handleSubmit} cancelForm = {this.handleCancel}/> :
        <MenuTable menus={this.props.menus} addedFormCB = {this.changeAddForm}/>}
      </div>
    );
  }
}

export default Menu;