import { Component } from "react";

class MejaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            tableNo: '',
            status: '',
            isValid: true
        }
    }

    handleChangeId = (event) => {
        this.setState({
            id: event.target.value,
            isValid: this.validation()
        })
    }

    handleChangeTableNo = (event) => {
        this.setState({
            tableNo: event.target.value,
            isValid: this.validation()
        })
    }

    handleChangeStatus = (event) => {
        this.setState({
            status: event.target.value,
            isValid: this.validation()
        })
    }

    validation = () => {
        if(this.state.id && this.state.tableNo && this.state.status){
          return false
        }else{
          return true
        }
    }

    handleSubmit = (event) => {
        this.props.submitForm(this.state)
        event.preventDefault()
    }
  
    handleCancel = () => {
        this.props.cancelForm()
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputId">Id</label>
                            <input
                            type="text"
                            className="form-control"
                            id="inputId"
                            placeholder="Enter Id"
                            onChange={this.handleChangeId}/>
                        <label htmlFor="inputTableNo">Table No</label>
                            <input
                            type="text"
                            className="form-control"
                            id="inputTableNo"
                            placeholder="Enter Table No"
                            onChange={this.handleChangeTableNo}
                            />
                        <label htmlFor="inputStatus">Status</label>
                        <br/>
                            <select value={this.state.value} onChange={this.handleChangeStatus}>
                                <option>Available</option>
                                <option>Unavailable</option>
                            </select>
                        </div>
                        <br/>
                        <div className="button">
                        <button type="button" className="btn btn-dark" onClick={this.handleCancel}>
                            Cancel
                        </button>
                        <button disabled={this.state.isValid} type="submit" className="btn btn-light" onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default MejaList