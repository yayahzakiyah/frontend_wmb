import {Component} from "react";
import {menus} from "../../../data";
import MenuList from "../component/MenuList";
import './MenuForm.css'

class MenuForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: {
                id: '',
                menuName: '',
                price: 0,
                category: ''
            }, error: {
                errorid: null,
                errormenuName: null,
                errorprice: null,
                errorcategory: null
            },
            isValidForm: false,
            isShowingForm: false
        }
    }

    handleShowForm = (isShowing) => {
        this.setState({
            isShowingForm: isShowing
        })
    }

    componentDidMount() {
        console.log('menu form mounting')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('menu form update')
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
            if (prevState.error.errorid === '' && prevState.error.errormenuName === '' && prevState.error.errorprice === '' && prevState.error.errorcategory) {
                return {isValidForm: true}
            } else {
                return {isValidForm: false}
            }
        })
    }
    handleInputChange = (e) => {
        const key = e.target.name;
        let val = e.target.value;
        if (key === 'price') {
            val = Number(val.replace(/\D/, ''))
        }
        this.setState({
            menu: {
                ...this.state.menu, [key]: val
            }
        })
        this.handleValidation(key, val)
    }
    handleAddMenu = () => {
        menus.push({...this.state.menu});
        console.log(menus);
        this.clearForm();
        this.props.handleFormUpdate();
    }
    clearForm = () => {
        this.setState({
            menu: {
                id: '',
                menuName: '',
                price: 0,
                category: 'Beverage'
            }, error: {
                errorid: null,
                errormenuName: null,
                errorprice: null,
                errorcategory: null
            },
            isValidForm: false,
            isShowingForm: false
        })
    }

    render() {
        const {menu: {id, menuName, price}, error: {errorid, errormenuName, errorprice, errorcategory}, isValidForm} = this.state
        return (
            <>
                <MenuList onShowingForm={this.handleShowForm}/>
                {this.state.isShowingForm &&
                    <div className="menu-form-container">
                        <div className="menu-form-input-container">
                            <div className="menu-form-header">
                                <h2>Menu Form</h2>
                                <button onClick={() => this.handleShowForm(false)}>X</button>
                            </div>
                            <label>ID</label>
                            <input className="menu-form-input" name='id' type='text' value={id} onChange={this.handleInputChange}/>
                            {errorid && <div className='form-input-error'><small>{errorid}</small></div>}
                            <br/>
                            <label>Menu Name</label>
                            <input className="menu-form-input" name='menuName' type='text' value={menuName} onChange={this.handleInputChange}/>
                            {errormenuName && <div className='form-input-error'><small>{errormenuName}</small></div>}
                            <br/>
                            <label>Price</label>
                            <input className="menu-form-input" name='price' type='text' value={price} onChange={this.handleInputChange}/>
                            {errorprice && <div className='form-input-error'><small>{errorprice}</small></div>}
                            <br/>
                            <label>Category</label>
                            <select className='menu-form-input' name="category" onChange={this.handleInputChange}>
                                <option  value='Food'>Food</option>
                                <option value='Beverage'>Beverage</option>
                            </select>
                            <br/>
                            <button className='menu-form-action' disabled={!isValidForm} onClick={this.handleAddMenu}>Add</button>
                        </div>
                    </div>
                }
            </>

        )
    }
}

export default MenuForm;