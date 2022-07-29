import { Component } from "react";

class MenuTable extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    return (
      <div className="contrainer">
      <button  type="button" className="btn btn-dark" onClick={this.props.addedFormCB}>Add Menu</button>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{width:500}} scope="col">No</th>
              <th style={{width:500}} scope="col">Menu Name</th>
              <th style={{width:500}} scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {
                this.props.menus.map((menu, index) => {
                    return  <tr key={menu.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{menu.menuName}</td>
                    <td>{menu.price}</td>
                  </tr>
                })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default MenuTable