import { Component } from "react";

class MenuForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            menuName: '',
            price: '',
            isValid: true
        }
    }

    validation = () => {
        if(this.state.id && this.state.name && this.state.price){
          return true
        }else{
          return false
        }
    }

    handleChangeId = (event) => {
        this.setState({
            id: event.target.value,
            isValid: this.validation()
        })
    }

    handleChangeMenuName = (event) => {
        this.setState({
            menuName: event.target.value,
            isValid: this.validation()
        })
    }

    handleChangePrice = (event) => {
        this.setState({
            price: event.target.value,
            isValid: this.validation()
        })
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
                        <label htmlFor="inputId">Id Menu</label>
                            <input
                            type="text"
                            className="form-control"
                            id="inputId"
                            placeholder="Enter Id"
                            onChange={this.handleChangeId}/>
                        <label htmlFor="inputMenuName">Name</label>
                            <input
                            type="text"
                            className="form-control"
                            id="inputMenuName"
                            placeholder="Enter Menu Name"
                            onChange={this.handleChangeMenuName}
                            />
                        <label htmlFor="inputPrice">Price</label>
                            <input
                            type="text"
                            className="form-control"
                            id="inputPrice"
                            placeholder="Enter Price"
                            onChange={this.handleChangePrice}/>
                    </div>
                    <br/>
                    <div className="button">
                    <button type="button" className="btn btn-dark" onClick={this.handleCancel}>
                    Cancel
                    </button>
                    <span/>
                    <button disabled={this.state.isValid} type="submit" className="btn btn-light" onClick={this.handleSubmit}>
                    Submit
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default MenuForm