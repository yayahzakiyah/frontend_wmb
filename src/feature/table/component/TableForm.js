import {Component} from "react";
import {tables} from "./../../../data";
import '../../../App.css';
import './TableForm.css'

class TableForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: {
                id: '',
                tableNumber: '',
                status: 'Unavailable'
            },
            error: {
                errorid: null,
                errortableNumber: null
            },
            isValidForm: false
        }
    }

    componentDidMount() {
        console.log('table form mounting')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('table form update')
    }

    handleValidation = (key, value) => {
        let isValid;
        if (value === '') {
            this.setState({
                error: {...this.state.error, [`error${key}`]: 'field is required'}
            })
            isValid = false
        } else {
            this.setState({
                error: {...this.state.error, [`error${key}`]: ''}
            })
            isValid = true
        }
        this.handleFormValidation()
        return isValid
    }

    handleFormValidation = () => {
        this.setState((prevState) => {
            if (prevState.error.errorid === '' && prevState.error.errortableNumber === '') {
                return {isValidForm: true}
            } else {
                return {isValidForm: false}
            }
        })
    }
    handleInputChange = (e) => {
        const key = e.target.name;
        const val = e.target.value;
        this.setState({
            table: {
                ...this.state.table, [key]: val
            }
        })
        this.handleValidation(key, val)
    }

    handleAddTable = () => {
        tables.push({...this.state.table});
        console.log(tables);
        this.clearForm();
        this.props.handleFormUpdate();
    }
    clearForm = () => {
        this.setState({
            table: {
                id: '',
                tableNumber: '',
                status: 'Unavailable'
            },
            error: {
                errorid: null,
                errortableNumber: null
            },
            isValidForm: false
        })
    }

    render() {
        const {table: {id, tableNumber, status}, error: {errorid, errortableNumber}, isValidForm} = this.state
        return (
            <>
            <div>
                <div className="table-form-input-container">
                <div className="table-form-header">
                <h2>Table Form</h2>
                </div>
                <label>ID</label>
                <input className="table-form-input" name='id' type='text' value={id} onChange={this.handleInputChange}/>
                {errorid && <div className='form-input-error'><small>{errorid}</small></div>}
                <br/>
                <label>Table Number</label>
                <input className="table-form-input" name='tableNumber' type='text' value={tableNumber} onChange={this.handleInputChange}/>
                {errortableNumber && <div className='form-input-error'><small>{errortableNumber}</small></div>}
                <br/>
                <label>Status</label>
                <select className='table-form-input' name="category" onChange={this.handleInputChange}>
                    <option value='Available'>Available</option>
                    <option value='Unavailable'>Unavailable</option>
                </select>
                <br/>
                <button className="table-form-action" disabled={!isValidForm} onClick={this.handleAddTable}>Add</button>
                </div>
            
            </div>
                
            </>
        )
    }
}

export default TableForm;