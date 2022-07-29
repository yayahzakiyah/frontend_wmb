import { Component } from "react";

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    return (
      <div className="contrainer">
      <button  type="button" className="btn btn-dark" onClick={this.props.addedFormCB}>Add Table</button>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{width:500}} scope="col">No</th>
              <th style={{width:500}} scope="col">Table No</th>
              <th style={{width:500}} scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {
                this.props.tables.map((table, index) => {
                    return  <tr key={table.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{table.tableNo}</td>
                    <td>{table.status}</td>
                  </tr>
                })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableList