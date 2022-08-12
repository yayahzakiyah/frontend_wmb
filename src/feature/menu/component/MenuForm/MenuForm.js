import { FormButton } from '../../../../shared/components/Form/FormButton';
import { FormInput } from '../../../../shared/components/Form/FormInput';
import MenuList from './../MenuList/MenuList'
import './MenuForm.css'
import { UseMenu } from "../../UseMenu";

const MenuForm = () => {
    const {handleShowForm, handleInputChange, handleButton, menus, viewState, isShowingForm} = UseMenu()

    return (
            <>
            <MenuList onShowingForm={handleShowForm}/>
                {isShowingForm &&
                <div className="menu-form-container">
                        <div className="menu-form-input-container">
                            <div className="menu-form-header">
                                <h2>Menu Form</h2>
                                <button onClick={() => handleShowForm(false)}>X</button>
                            </div>
                            <FormInput id='id' type='text' label='ID' value={menus.id}
                            onValueChange={handleInputChange}/>
                            <FormInput id='menuName' type='text' label='Menu Name' value={menus.menuName}
                            onValueChange={handleInputChange}/>
                            <FormInput id='price' type='text' label='Menu Price' value={menus.price}
                            onValueChange={handleInputChange}/>
                            < br/>
                            <FormButton disabled={viewState.isLoading} onClick={handleButton}
                            label='Add'/>
                        </div>
                    </div>
                }
            </>

        )
}

export default MenuForm;